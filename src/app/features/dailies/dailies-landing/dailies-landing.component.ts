import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Gw2ApiDailiesService } from '../../../gw2api/gw2api-dailies-service/gw2api-dailies.service';
import { DailyViewModelsService } from '../services/daily-viewmodels.service';
import { DailyGroup } from '../../../gw2api/gw2api-dailies-service/models/daily-group';
import { DailyGroupViewModel } from '../viewmodels/daily-group.viewmodel';
import { DailyViewModel } from '../viewmodels/daily.viewmodel';

@Component({
    selector: 'lal-dailies-landing',
    styleUrls: [ 'dailies-landing.component.css' ],
    templateUrl: 'dailies-landing.component.html'
})
export class DailiesLandingComponent implements OnInit {
    private dailyGroups: DailyGroupViewModel[] = [];

    constructor(
        private dailiesService: Gw2ApiDailiesService,
        private dailyViewModelsService: DailyViewModelsService) { }

    ngOnInit() {
        this.dailiesService
            .getDailies()
            .subscribe((dgs) => {
                for(let dailyGroup of dgs) {
                    let dailyViewModels: DailyViewModel[] = [];

                    for(let daily of dailyGroup.dailies) {
                        dailyViewModels.push(this.dailyViewModelsService.getViewModel(daily));
                    }

                    this.dailyGroups.push({
                        name: this.dailyViewModelsService.getDailyGroupName(dailyGroup.type),
                        dailies: dailyViewModels
                    });
                }
            });
    }
}