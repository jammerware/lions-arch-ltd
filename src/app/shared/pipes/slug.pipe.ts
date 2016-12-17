import { Pipe, PipeTransform } from '@angular/core';
import { SlugService } from '../../core/services/slug-service/slug.service';

@Pipe({ name: 'slug' })
export class SlugPipe implements PipeTransform {
  constructor(private slugService: SlugService) { }

  transform(value: any): string {
    return this.slugService.getSlug((value || '').toString());
  }
}