import { Injectable } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';

@Injectable()
export class ImageService {
  constructor(private location: Location, private locationStrategy: LocationStrategy) { }
  
  getImageUrl(fileName:string): string {
    return Location.joinWithSlash(this.locationStrategy.getBaseHref(), fileName);
  }
}