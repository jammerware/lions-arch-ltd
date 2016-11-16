import { Observable } from 'rxjs/Observable';

import { Achievement } from '../../../gw2api/gw2api-achievements-service/models/achievement';
import { DailyContentRequirement } from '../../../gw2api/gw2api-dailies-service/models/daily-content-requirement';
import { DailyLevel } from '../../../gw2api/gw2api-dailies-service/models/daily-level';

export class DailyViewModel {
    achievement: Observable<Achievement>;
    contentRequirement: DailyContentRequirement[];
    level: DailyLevel;
}