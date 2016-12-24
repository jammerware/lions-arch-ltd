import { Injectable } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';

@Injectable()
export class AssetService {
  constructor(private locationStrategy: LocationStrategy) { }

  getUrl(fileName: string, absolute = false): string {
    let assetRoot = Location.joinWithSlash(this.locationStrategy.getBaseHref(), 'assets');

    if (absolute) {
      assetRoot = Location.joinWithSlash(location.origin, assetRoot);
    }

    return Location.joinWithSlash(assetRoot, fileName);
  }
}