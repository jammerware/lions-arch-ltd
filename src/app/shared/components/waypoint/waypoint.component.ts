import { Component, Input, OnInit } from '@angular/core';

import { AssetService } from '../../../core/services/asset.service';
import { Waypoint } from '../../models/waypoint';

@Component({
    selector: 'waypoint',
    styleUrls: ['waypoint.component.scss'],
    templateUrl: 'waypoint.component.html'
})
export class WaypointComponent implements OnInit {
    @Input() waypoint: Waypoint;
    private iconUrl: string;

    constructor(
        private assetService: AssetService
    ) { }

    ngOnInit() {
        if (this.waypoint) {
            this.iconUrl = this.assetService.getUrl('images/icons/waypoint.png');
        }
    }
}