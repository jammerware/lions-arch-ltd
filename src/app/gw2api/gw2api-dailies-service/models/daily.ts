import { DailyLevel } from './daily-level';
import { DailyContentRequirement } from './daily-content-requirement';

export class Daily {
    achievementId: number;
    level: DailyLevel;
    contentRequirement: DailyContentRequirement[];
}