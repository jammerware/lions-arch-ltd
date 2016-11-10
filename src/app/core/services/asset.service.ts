import { Injectable } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';

@Injectable()
export class AssetService {
    constructor(private locationStrategy: LocationStrategy) { }

    getUrl(fileName: string): string {
        let assetRoot = Location.joinWithSlash(this.locationStrategy.getBaseHref(), 'assets');
        return Location.joinWithSlash(assetRoot, fileName);
    }
}