import { Injectable } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';

@Injectable()
export class ContentService {
  constructor(private locationStrategy: LocationStrategy) { }
  
  getContentUrl(fileName: string): string {
    return Location.joinWithSlash(this.locationStrategy.getBaseHref(), fileName);
  }  
}