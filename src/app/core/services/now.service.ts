import { Injectable } from '@angular/core';
import { Timespan } from '../../modules/timespan/timespan';

@Injectable()
export class NowService {
  public static MS_IN_DAY = 86400000;

  addTimespanToDate(date: Date, timespan: Timespan): Date {
    return new Date(date.getTime() + timespan.totalMilliseconds);
  }

  get(): Date {
    return new Date();
  }

  // returns the offset from UTC in ms
  getUtcOffset(): number {
    return new Date().getTimezoneOffset() * 60 * 1000;
  }

  getTimespanSinceMidnightUtc(): Timespan {
    let date = this.get();
    let copyOfDate = new Date(date);
    copyOfDate.setHours(0, 0, 0, 0);

    // this is ms since midnight, local time
    let result = date.getTime() - copyOfDate.getTime();
    let utcOffset = this.getUtcOffset();

    return Timespan.fromMilliseconds((result + utcOffset) % NowService.MS_IN_DAY);
  }
}