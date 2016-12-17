import { Inject, Pipe, PipeTransform } from '@angular/core';
import { ILocalizationService, ILOCALIZATIONSERVICE } from '../../core/services/localization/ilocalization.service';

@Pipe({ name: 'timeUntil' })
export class TimeUntilPipe implements PipeTransform {
  constructor( @Inject(ILOCALIZATIONSERVICE) private localizationService: ILocalizationService) { }

  transform(milliseconds: number): string {
    if (milliseconds < 60000 && milliseconds >= 0) {
      return this.localizationService.inLessThanAMinute;
    }

    // resolve negative values
    let about = `${this.localizationService.inAbout} `;
    let ago = '';

    if (milliseconds < 0) {
      ago = ` ${this.localizationService.ago}`;
      about = `${this.localizationService.about}`;
      milliseconds = Math.abs(milliseconds);
    }

    // minutes
    let remaining = Math.round(milliseconds / 60000);
    if (remaining < 60) {
      if (remaining === 1) { return `${about} ${this.localizationService.aMinute}`; }
      return `${about} ${remaining} ${this.localizationService.minutes}${ago}`;
    }

    // hours
    remaining = Math.round(remaining / 60);
    if (remaining < 24) {
      if (remaining === 1) { return `${about} ${this.localizationService.anHour}`; }
      return `${about} ${remaining} ${this.localizationService.hours}${ago}`;
    }

    // days
    remaining = Math.round(remaining / 24);
    if (remaining < 7) {
      if (remaining === 1) { return `${about} ${this.localizationService.aDay}`; }
      return `${about} ${remaining} ${this.localizationService.days}${ago}`;
    }

    return this.localizationService.inALongTime;
  }
}