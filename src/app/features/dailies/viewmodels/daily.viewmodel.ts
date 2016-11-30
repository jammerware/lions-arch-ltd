import { Observable } from 'rxjs/Observable';

import { Achievement } from '../../../modules/gw2api/gw2api-achievements-service/models/achievement';
import { DailyContentRequirement } from '../../../modules/gw2api/gw2api-dailies-service/models/daily-content-requirement';
import { DailyLevel } from '../../../modules/gw2api/gw2api-dailies-service/models/daily-level';

export class DailyViewModel {
    achievement: Observable<Achievement>;
    contentRequirement: DailyContentRequirement[];
    level: DailyLevel;
}