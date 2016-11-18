import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Gw2ApiDailiesService } from '../../../gw2api/gw2api-dailies-service/gw2api-dailies.service';
import { DailyViewModelsService } from '../services/daily-viewmodels.service';
import { DailyGroupViewModel } from '../viewmodels/daily-group.viewmodel';
import { DailyViewModel } from '../viewmodels/daily.viewmodel';

@Component({
    selector: 'lal-dailies-landing',
    styleUrls: [ 'dailies-landing.component.css' ],
    templateUrl: 'dailies-landing.component.html'
})
export class DailiesLandingComponent implements OnInit, OnDestroy {
    private dailyGroups: DailyGroupViewModel[] = [];
    private routeParamsSubscription: Subscription;

    constructor(
        private activatedRoute: ActivatedRoute,
        private dailiesService: Gw2ApiDailiesService,
        private dailyViewModelsService: DailyViewModelsService) { }

    ngOnInit() {
        this.routeParamsSubscription = this.activatedRoute.params.subscribe(p => {
            // TODO: investigate child routes and somehow use that to do the /dailies/wvw kinda route
        });

        this.dailiesService
            .getDailies()
            .subscribe((dgs) => {
                for(let dailyGroup of dgs) {
                    let dailyViewModels: DailyViewModel[] = [];

                    for (let daily of dailyGroup.dailies) {
                        dailyViewModels.push(this.dailyViewModelsService.getViewModel(daily));
                    }

                    this.dailyGroups.push({
                        name: this.dailyViewModelsService.getDailyGroupName(dailyGroup.type),
                        dailies: dailyViewModels
                    });
                }
            });
    }

    ngOnDestroy() {
        if (this.routeParamsSubscription) { this.routeParamsSubscription.unsubscribe(); }
    }
}