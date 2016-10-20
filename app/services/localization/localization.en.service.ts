import { Injectable } from '@angular/core';
import { ILocalizationService } from './ilocalization.service';

@Injectable()
export class EnLocalizationService implements ILocalizationService {
  // expressions
  about: string = "about";

  // actual units of time
  second: string = "second";
  seconds: string = "seconds";
  minute: string = "minute";
  minutes: string = "minutes";
  hour: string = "hour";
  hours: string = "hours";
  day: string = "day";
  days: string = "days";
  week: string = "week";
  weeks: string = "weeks";
  month: string = "month";
  months: string = "months";
  year: string = "year";
  years: string = "years";

  // colloquial expressions of time
  aMinute: string = "a minute";
  anHour: string = "an hour";
  aDay: string = "a day";
  longTime: string = "a really freaking long time";

  unspecifiedError: string = 'Something\'s not quite right...';
}