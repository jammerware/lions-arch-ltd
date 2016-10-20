import { Injectable } from '@angular/core';

const MS_IN_DAY: number = 86400000;
const UTC_OFFSET: number = new Date().getTimezoneOffset() * 60 * 1000;

@Injectable()
export class TimespanService {
  getMsSinceMidnightUtc(): number {
    let date = new Date();
    let copyOfDate = new Date(date);
    copyOfDate.setHours(0,0,0,0);

    // this is ms since midnight
    let result = date.getTime() - copyOfDate.getTime();

    return ((result + UTC_OFFSET) % MS_IN_DAY);
  }
}