import { Observable } from 'rxjs/Observable';

import { GoalContributionViewModel } from './goal-contribution.viewmodel';
import { EventWaypointViewModel } from '../viewmodels/event-waypoint.viewmodel';
import { Waypoint } from '../models/waypoint';

export class EventViewModel {
    id: string;
    name: string;
    zone: string;
    description: string;
    primaryWaypoint: Observable<Waypoint>;
    waypoints: Observable<EventWaypointViewModel[]>;
    guide?: string;
    countdownText: string;
    goalContributions: Observable<GoalContributionViewModel[]>;
    msTilNextOccurrence: Observable<number>;
}