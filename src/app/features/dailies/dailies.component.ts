import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Gw2ApiDailiesService } from '../../gw2-api/services/gw2api-dailies.service';
import { DailyGroup } from '../../gw2-api/models/daily-group';

@Component({
    selector: 'lal-dailies',
    templateUrl: 'dailies.component.html'
})
export class DailiesComponent implements OnInit {
    private dailies: Observable<DailyGroup[]>;

    constructor(private dailiesService: Gw2ApiDailiesService) { }

    ngOnInit() { 
        this.dailies = this.dailiesService.getDailies();
    }
}