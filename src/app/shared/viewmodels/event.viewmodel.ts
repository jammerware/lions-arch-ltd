import { Observable } from 'rxjs/Observable';

import { Waypoint } from '../models/waypoint';
import { EventWaypointViewModel } from '../viewmodels/event-waypoint.viewmodel';
import { GoalContributionViewModel } from './goal-contribution.viewmodel';

export class EventViewModel {
    id: string;
    name: string;
    zone: string;
    description: string;
    primaryWaypoint: Observable<Waypoint>;
    waypoints: Observable<EventWaypointViewModel[]>;
    guide?: string;
    countdownLocalization: string;
    goalContributions: Observable<GoalContributionViewModel[]>;
    msTilNextOccurrence: number;
}