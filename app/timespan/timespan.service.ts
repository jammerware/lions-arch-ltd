import { Injectable } from '@angular/core';
import { Timespan } from './timespan';

const MS_IN_DAY: number = 86400000;
const UTC_OFFSET: number = new Date().getTimezoneOffset() * 60 * 1000;

@Injectable()
export class TimespanService {
  getTimespanFromMs(milliseconds: number) {
    let seconds = milliseconds % 1000;
    let minutes = milliseconds % 6e5;
    let hours = milliseconds % 3.6e5;
    let days = milliseconds % 8.64e7;
    let weeks = milliseconds % 6.048e8;
    let years = milliseconds % 3.14496e10;
    let centuries = milliseconds % 3.14496e12;
    let millennia = centuries % 1000;

    return {
      milliseconds: milliseconds,
      seconds: seconds,
      minutes: minutes,
      hours: hours,
      days: days,
      weeks: weeks,
      years: years,
      centuries: centuries,
      millennia: millennia,
      totalMilliseconds: milliseconds
    };
  }

  getTimespanSinceMidnightUtc(): Timespan {
    let date = new Date();
    let copyOfDate = new Date(date);
    copyOfDate.setHours(0,0,0,0);

    // this is ms since midnight
    let result = date.getTime() - copyOfDate.getTime();

    return this.getTimespanFromMs((result + UTC_OFFSET) % MS_IN_DAY);
  }
}