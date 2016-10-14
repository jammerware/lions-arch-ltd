import { Inject, Pipe, PipeTransform } from '@angular/core';
import { ILocalizationService, ILOCALIZATIONSERVICE } from '../services/localization/ilocalization.service';

@Pipe({name: 'timespan'})
export class TimespanPipe implements PipeTransform {
  constructor(@Inject(ILOCALIZATIONSERVICE) private localizationService: ILocalizationService) { }

  transform(milliseconds: number, outputAsFuzzy: boolean): string {
    if(milliseconds < 0)
      return this.localizationService.unspecifiedError;
    else if (milliseconds === 0)
      return "now!"

    return milliseconds.toString();
  }
}