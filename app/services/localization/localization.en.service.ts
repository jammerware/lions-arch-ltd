import { Injectable } from '@angular/core';
import { ILocalizationService } from './ilocalization.service';

@Injectable()
export class EnLocalizationService implements ILocalizationService {
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

  unspecifiedError: string = 'Something\'s not quite right...';
}