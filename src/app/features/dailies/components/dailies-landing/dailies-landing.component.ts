import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Gw2ApiDailiesService } from '../../../../modules/gw2api/gw2api-dailies-service/gw2api-dailies.service';
import { DailyViewModelsService } from '../../services/daily-viewmodels.service';
import { DailyGroupViewModel } from '../../viewmodels/daily-group.viewmodel';
import { DailyGroupFractalsViewModel } from '../../viewmodels/daily-group-fractals.viewmodel';
import { DailyViewModel } from '../../viewmodels/daily.viewmodel';
import { DailyGroupType } from '../../../../modules/gw2api/gw2api-dailies-service/models/daily-group-type';

@Component({
  selector: 'lal-dailies-landing',
  styleUrls: ['./dailies-landing.component.scss'],
  templateUrl: './dailies-landing.component.html'
})
export class DailiesLandingComponent implements OnInit, OnDestroy {
  private dailyGroups: DailyGroupViewModel[] = [];
  private fractalDailies: Observable<DailyGroupFractalsViewModel>;
  private routeParamsSubscription: Subscription;
  private dailiesSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dailiesService: Gw2ApiDailiesService,
    private dailyViewModelsService: DailyViewModelsService) { }

  ngOnInit() {
    this.routeParamsSubscription = this.activatedRoute.params.subscribe(p => {
      // TODO: investigate child routes and somehow use that to do the /dailies/wvw kinda route
    });

    this.dailiesSubscription = this.dailiesService
      .getDailies()
      .subscribe((dgs) => {
        for (let dailyGroup of dgs.filter(dg => dg.type !== DailyGroupType.fractals)) {
          let dailyViewModels: DailyViewModel[] = [];

          for (let daily of dailyGroup.dailies) {
            dailyViewModels.push(this.dailyViewModelsService.getViewModel(daily));
          }

          this.dailyGroups.push({
            name: this.dailyViewModelsService.getDailyGroupName(dailyGroup.type),
            dailies: dailyViewModels
          });
        }

        // TODO: think about this. fractal dailies need special treatment because the data coming out of the official
        // api is so semantically different from other daily groups, but obviously this feels pretty weird.
        this.fractalDailies = this.dailyViewModelsService.getFractalDailyGroupViewModel(dgs);
      });
  }

  ngOnDestroy() {
    if (this.routeParamsSubscription) { this.routeParamsSubscription.unsubscribe(); }
    if (this.dailiesSubscription) { this.dailiesSubscription.unsubscribe(); }
  }
}