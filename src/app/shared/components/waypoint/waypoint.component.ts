import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';

import { AssetService } from '../../../core/services/asset.service';
import { ClipboardService } from '../../../core/services/clipboard.service';
import { ToastService } from '../../../core/services/toast.service';
import { Waypoint } from '../../models/waypoint';

@Component({
    selector: 'waypoint',
    styleUrls: [ './waypoint.component.css' ],
    templateUrl: './waypoint.component.html'
})
export class WaypointComponent implements OnInit {
    @Input() waypoint: Waypoint;
    private iconUrl: string;

    constructor(
        private clipboardService: ClipboardService,
        private assetService: AssetService,
        private toastService: ToastService,
        private viewContainerRef: ViewContainerRef
    ) { }

    ngOnInit() { 
        this.iconUrl = this.assetService.getUrl('images/icons/waypoint.png');
        this.clipboardService.init((clipboardEvent: any) => {
            this.toastService.show(`Copied ${this.waypoint.code} to clipboard.`, this.viewContainerRef)
        });
    }
}