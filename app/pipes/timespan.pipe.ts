import { Inject, Pipe, PipeTransform } from '@angular/core';
import { ILocalizationService, ILOCALIZATIONSERVICE } from '../services/localization/ilocalization.service';

@Pipe({name: 'timespan'})
export class TimespanPipe implements PipeTransform {
  constructor(@Inject(ILOCALIZATIONSERVICE) private localizationService: ILocalizationService) { }

  transform(milliseconds: number): string {
    if(!milliseconds || milliseconds < 0)
      return this.localizationService.unspecifiedError;
    else if (milliseconds < 60000)
      return "anytime now!"

    // minutes
    var remaining = Math.round(milliseconds / 60000);
    if(remaining < 60) {
      if(remaining == 1) return `${this.localizationService.about} ${this.localizationService.aMinute}`;
      return `${this.localizationService.about} ${remaining} ${this.localizationService.minutes}`;
    }

    // hours
    remaining = Math.round(remaining / 60);
    if(remaining < 24) {
      if(remaining == 1) return `${this.localizationService.about} ${this.localizationService.anHour}`;
      return `${this.localizationService.about} ${remaining} ${this.localizationService.hours}`;
    }

    // days
    remaining = Math.round(remaining / 24);
    if(remaining < 7) {
      if(remaining == 1) return `${this.localizationService.about} ${this.localizationService.aDay}`;
      return `${this.localizationService.about} ${remaining} ${this.localizationService.days}`;
    }

    return this.localizationService.longTime;
  }
}