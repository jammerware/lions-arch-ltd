import { Injectable } from '@angular/core';
import { ILocalizationService } from './ilocalization.service';

@Injectable()
export class EnLocalizationService implements ILocalizationService {
  // expressions
  inAbout: string = "in about";

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

  // oops
  unspecifiedError: string = 'Something\'s not quite right...';

  // countdown text
  private readonly COUNTDOWN_TEXT = {
    ab: "The lootsplosion begins",
    ds: "The Mouth opens",
    vb: "Night falls",
  };

  public getCountdownText(eventKey: string): string {
    return this.COUNTDOWN_TEXT[eventKey] || "Starts";
  }
}