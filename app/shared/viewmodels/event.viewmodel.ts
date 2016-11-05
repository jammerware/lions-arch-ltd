import { Observable } from 'rxjs/observable';
import { GoalContributionViewModel } from './goal-contribution.viewmodel';

export class EventViewModel {
    name: string;
    description: string;
    zone: string;
    guide: string;
    goalContributions: Observable<GoalContributionViewModel[]>;
}