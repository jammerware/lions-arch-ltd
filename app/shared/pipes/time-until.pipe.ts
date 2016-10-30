import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Timespan } from '../../timespan/timespan';
import { TimespanService } from '../../timespan/timespan.service';
import { ILocalizationService, ILOCALIZATIONSERVICE } from '../../core/services/localization/ilocalization.service';

@Pipe({name: 'timeUntil'})
export class TimeUntilPipe implements PipeTransform {
  constructor(@Inject(ILOCALIZATIONSERVICE) private localizationService: ILocalizationService) { }

  transform(milliseconds: number): string {
    if(!milliseconds || milliseconds < 0)
      return this.localizationService.unspecifiedError;
    else if (milliseconds < 60000)
      return "anytime now!"

    // minutes
    var remaining = Math.round(milliseconds / 60000);
    if(remaining < 60) {
      if(remaining == 1) return `${this.localizationService.inAbout} ${this.localizationService.aMinute}`;
      return `${this.localizationService.inAbout} ${remaining} ${this.localizationService.minutes}`;
    }

    // hours
    remaining = Math.round(remaining / 60);
    if(remaining < 24) {
      if(remaining == 1) return `${this.localizationService.inAbout} ${this.localizationService.anHour}`;
      return `${this.localizationService.inAbout} ${remaining} ${this.localizationService.hours}`;
    }

    // days
    remaining = Math.round(remaining / 24);
    if(remaining < 7) {
      if(remaining == 1) return `${this.localizationService.inAbout} ${this.localizationService.aDay}`;
      return `${this.localizationService.inAbout} ${remaining} ${this.localizationService.days}`;
    }

    return this.localizationService.longTime;
  }
}