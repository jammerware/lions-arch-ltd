import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

// things that will hopefully be npm packages someday
import '../../../modules/tslinq/tslinq';

// local declarations
import { AssetService } from '../../../core/services/asset.service';
import { Daily } from '../../../modules/gw2api/gw2api-dailies-service/models/daily';
import { DailyGroup } from '../../../modules/gw2api/gw2api-dailies-service/models/daily-group';
import { DailyGroupType } from '../../../modules/gw2api/gw2api-dailies-service/models/daily-group-type';
import { DailyViewModel } from '../viewmodels/daily.viewmodel';
import { DailyGroupFractalsViewModel } from '../viewmodels/daily-group-fractals.viewmodel';
import { DailyRecommendedFractalViewModel } from '../viewmodels/daily-recommended-fractal.viewmodel';
import { Fractal } from '../../../shared/models/fractal';
import { FractalsService } from '../../../core/services/fractals-service/fractals.service';
import { Gw2ApiAchievementsService } from '../../../modules/gw2api/gw2api-achievements-service/gw2api-achievements.service';

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

        return this.fractalsService
            .getFractals()
            .mergeMap(fractals => {
                return this.achievementsService
                    .getAchievements(achievementIds)
                    .map(achievements => {
                        let recommendedFractalDailyViewModels: DailyRecommendedFractalViewModel[] = [];
                        let tierFractals: Fractal[] = [];

                        let recommendedFractalDailies = achievements.filter(a => a.name.indexOf('Recommended') >= 0);
                        let tierFractalDailies = achievements.filter(a => a.name.indexOf('Tier') >= 0);

                        for (let achievement of recommendedFractalDailies) {
                            let recommendedScaleValue = +achievement.name.match(/\d+/)[0];
                            let daily = fractalDailyGroup.dailies.find(d => d.achievementId === achievement.id);

                            let fractal = fractals.find(f => {
                                return f.scales.any(s => s.value === recommendedScaleValue);
                            });

                            recommendedFractalDailyViewModels.push({
                                daily: daily,
                                fractal: fractal,
                                recommendedScale: fractal.scales.find(s => s.value === recommendedScaleValue)
                            });
                        }

                        for (let achievement of tierFractalDailies) {
                            let fractalName = achievement.name.match(/Daily Tier \d+ ([\s\S]+)/i)[1];
                            if (!tierFractals.find(tf => tf.name === fractalName)) {
                                tierFractals.push(fractals.find(f => f.name === fractalName));
                            }
                        }

                        return {
                            recommendedFractalDailies: recommendedFractalDailyViewModels,
                            tierFractalDailies: tierFractals
                        };
                    });
            });
    }
}