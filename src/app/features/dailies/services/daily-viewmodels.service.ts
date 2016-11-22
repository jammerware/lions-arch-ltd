import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AssetService } from '../../../core/services/asset.service';
import { Daily } from '../../../gw2api/gw2api-dailies-service/models/daily';
import { DailyGroup } from '../../../gw2api/gw2api-dailies-service/models/daily-group';
import { DailyGroupType } from '../../../gw2api/gw2api-dailies-service/models/daily-group-type';
import { DailyViewModel } from '../viewmodels/daily.viewmodel';
import { DailyGroupFractalsViewModel } from '../viewmodels/daily-group-fractals.viewmodel';
import { DailyRecommendedFractalViewModel } from '../viewmodels/daily-recommended-fractal.viewmodel';
import { FractalsService } from '../../../core/services/fractals-service/fractals.service';
import { Gw2ApiAchievementsService } from '../../../gw2api/gw2api-achievements-service/gw2api-achievements.service';

@Injectable()
export class DailyViewModelsService {
    constructor(
        private assetService: AssetService,
        private achievementsService: Gw2ApiAchievementsService,
        private fractalsService: FractalsService) { }

    getDailyGroupName(dailyGroupType: DailyGroupType): string {
        switch (dailyGroupType) {
            case DailyGroupType.pve: return 'PvE';
            case DailyGroupType.pvp: return 'PvP';
            case DailyGroupType.wvw: return 'WvW';
        }

        return DailyGroupType[dailyGroupType].toUpperCase();
    }

    getViewModel(daily: Daily): DailyViewModel {
        return {
            achievement: this.achievementsService
                .getAchievement(daily.achievementId)
                .map((a) => {
                    if (!a.iconUrl) {
                        a.iconUrl = this.assetService.getUrl('images/icons/pve-icon.png');
                    }

                    return a;
                }),
            contentRequirement: daily.contentRequirement,
            level: daily.level
        };
    }

    getFractalDailyGroupViewModel(dailyGroups: DailyGroup[]): Observable<DailyGroupFractalsViewModel> {
        let fractalDailyGroup = dailyGroups.filter(dg => dg.type === DailyGroupType.fractals)[0];
        if (!fractalDailyGroup) { return Observable.of(null); }

        let achievementIds = fractalDailyGroup.dailies.map(d => d.achievementId);

        return Observable.of({
            recommendedFractalDailies: []
        });

        // return
        //     this.fractalsService.getFractals()
        //         .flatMap(fractals => fractals)
        //         .flatMap(fractals => {

        //         });
        // this.achievementsService
        //     .getAchievements(achievementIds)

        //     .map(achievements => {
        //         let recommendedFractalDailyViewModels: DailyRecommendedFractalViewModel[] = [];
        //         let recommendedFractalDailies = achievements.filter(a => a.name.indexOf('Recommended'));

        //         for(let achievement of achievements.filter(a => a.name.indexOf('Recommended') >= 0)) {
        //             recommendedFractalDailyViewModels.push({
        //                 daily: fractalDailyGroup.dailies.filter(d => d.achievementId == achievement.id)[0],
        //                 fractal: 
        //             });
        //         }

        //         return {
        //             recommendedFractalDailies: recommendedFractalDailyViewModels
        //         };

        //     });
    }
}