import { Observable } from 'rxjs/Observable';

import { GoalContributionViewModel } from './goal-contribution.viewmodel';
import { Waypoint } from '../models/waypoint';

export class EventViewModel {
    id: string;
    name: string;
    zone: string;
    description: string;
    primaryWaypoint: Waypoint;
    waypoints: Waypoint[];
    guide?: string;
    countdownText: string;
    goalContributions: Observable<GoalContributionViewModel[]>;
    msTilNextOccurrence: number;
}