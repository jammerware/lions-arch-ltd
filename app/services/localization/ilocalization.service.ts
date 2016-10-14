import { OpaqueToken } from '@angular/core';

export let ILOCALIZATIONSERVICE = new OpaqueToken('ILocalizationService');

export interface ILocalizationService {
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

  readonly unspecifiedError: string;
}