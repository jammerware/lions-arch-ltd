import { OpaqueToken } from '@angular/core';
import { EventCountdownLocalization } from '../../../shared/models/event-countdown-localization';

export let ILOCALIZATIONSERVICE = new OpaqueToken('ILocalizationService');

export interface ILocalizationService {
    // expressions
    readonly about: string;
    readonly accept: string;
    readonly ago: string;
    readonly inAbout: string;
    readonly inALongTime: string;
    readonly inLessThanAMinute: string;

    // actual units of time
    readonly second: string;
    readonly seconds: string;
    readonly minute: string;
    readonly minutes: string;
    readonly hour: string;
    readonly hours: string;
    readonly day: string;
    readonly days: string;
    readonly week: string;
    readonly weeks: string;
    readonly month: string;
    readonly months: string;
    readonly year: string;
    readonly years: string;

    // colloquial time expressions
    readonly aMinute: string;
    readonly anHour: string;
    readonly aDay: string;

    // oops
    readonly unspecifiedError: string;

    // countdown text
    getCountdownLocalization(eventKey: string, msUntilActiveOccurrence: number): string;
    getEventStartingSoon(eventKey: string): string;
}