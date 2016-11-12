import { Injectable } from '@angular/core';
import { NowService } from '../core/services/now.service';
import { Timespan } from './timespan';

const MS_IN_DAY: number = 86400000;

@Injectable()
export class TimespanService {
  constructor(private nowService: NowService) { }

  getTimespanSinceMidnightUtc(): Timespan {
    let date = this.nowService.get();
    let copyOfDate = new Date(date);
    copyOfDate.setHours(0,0,0,0);

    // this is ms since midnight, local time
    let result = date.getTime() - copyOfDate.getTime();
    let utcOffset = this.nowService.getUtcOffset();

    return Timespan.fromMilliseconds((result + utcOffset) % MS_IN_DAY);
  }
}