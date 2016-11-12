import { Injectable } from '@angular/core';
import { ILocalizationService } from './ilocalization.service';
import { EventCountdownLocalization } from '../../../shared/models/event-countdown-localization';

@Injectable()
export class EnLocalizationService implements ILocalizationService {
  // expressions
  about: string = 'about';
  ago: string = 'ago';
  inAbout: string = 'in about';
  inLessThanAMinute: string = 'in less than a minute';
  inALongTime: string = 'in a really freaking long time';

  // actual units of time
  second: string = 'second';
  seconds: string = 'seconds';
  minute: string = 'minute';
  minutes: string = 'minutes';
  hour: string = 'hour';
  hours: string = 'hours';
  day: string = 'day';
  days: string = 'days';
  week: string = 'week';
  weeks: string = 'weeks';
  month: string = 'month';
  months: string = 'months';
  year: string = 'year';
  years: string = 'years';

  // colloquial expressions of time
  aMinute: string = 'a minute';
  anHour: string = 'an hour';
  aDay: string = 'a day';

  // oops
  unspecifiedError: string = '...';

  // countdown text
  private readonly COUNTDOWN_TEXT: any = {
    ab: {
      pastTenseCountdown: 'The lootsplosion began',
      presentTenseCountdown: 'The lootsplosion begins'
    },
    ds: {
      pastTenseCountdown: 'The Mouth opened',
      presentTenseCountdown: 'The Mouth opens',
    },
    vb: {
      pastTenseCountdown: 'Night fell',
      presentTenseCountdown: 'Night falls'
    },
  };

  public getCountdownLocalization(eventKey: string, msUntilActiveOccurrnce: number): string {
    let countdownLocalization: EventCountdownLocalization = this.COUNTDOWN_TEXT[eventKey] || { pastTenseCountdown: 'Started', presentTenseCountdown: 'Starts' };
    return msUntilActiveOccurrnce >= 0 ? countdownLocalization.presentTenseCountdown : countdownLocalization.pastTenseCountdown;
  }
}