import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AssetService } from '../../../core/services/asset.service';
import { Daily } from '../../../gw2api/gw2api-dailies-service/models/daily';
import { DailyGroupType } from '../../../gw2api/gw2api-dailies-service/models/daily-group-type';
import { DailyViewModel } from '../viewmodels/daily.viewmodel';
import { Gw2ApiAchievementsService } from '../../../gw2api/gw2api-achievements-service/gw2api-achievements.service';

@Injectable()
export class DailyViewModelsService {
    constructor(
        private assetService: AssetService,
        private achievementsService: Gw2ApiAchievementsService) { }

    getDailyGroupName(dailyGroupType: DailyGroupType): string {
        switch(dailyGroupType) {
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
                    if(!a.iconUrl) {
                        a.iconUrl = this.assetService.getUrl('images/icons/pve-icon.png');
                    }

                    return a;
                }),
            contentRequirement: daily.contentRequirement,
            level: daily.level
        }
    }
}