import { Injectable } from '@angular/core';
import { ILocalizationService } from './ilocalization.service';
import { EventCountdownLocalization } from '../../../shared/models/event-countdown-localization';

@Injectable()
export class EnLocalizationService implements ILocalizationService {
  // data because i'm the worst
  // COUNTDOWN TEXT
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

  // EVENT STARTING SOON
  private readonly EVENT_STARTING: any = {
    // HOT meta
    'ab': 'The Mordrem are about to breach the walls!',
    'ds': 'The Mouth will awaken soon...',
    'td': 'Chak are rushing the cannon (soon)!',
    'vb': 'The sun\'s setting in Verdant Brink...',
    // classic meta
    'dt': 'The winds are starting to blow...',
    // world bosses
    'wb-teq': 'Tequatl is stirring...',
    'wb-kq': 'The Queen is coming. Not the one with the Corgis.',
    'wb-tc': 'Taidha\'s starting to look a little upset...'
  };

  // expressions
  about: string = 'about';
  accept: string = 'got it';
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

  public getCountdownLocalization(eventKey: string, msUntilActiveOccurrence: number): string {
    let countdownLocalization: EventCountdownLocalization = this.COUNTDOWN_TEXT[eventKey] || { pastTenseCountdown: 'Started', presentTenseCountdown: 'Starts' };
    return msUntilActiveOccurrence >= 0 ? countdownLocalization.presentTenseCountdown : countdownLocalization.pastTenseCountdown;
  }

  public getEventStartingSoon(eventKey: string): string {
    return this.EVENT_STARTING[eventKey] || 'It\'s starting soon!';
  }
}