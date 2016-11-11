import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WaypointsService } from '../waypoints.service';
import { EventWaypoint } from '../../../shared/models/event-waypoint';
import { EventWaypointViewModel } from '../../../shared/viewmodels/event-waypoint.viewmodel';

@Injectable()
export class EventWaypointViewModelsService {
    constructor(private waypointsService: WaypointsService) { }

    getEventWaypointViewModels(eventWaypoints: EventWaypoint[]): Observable<EventWaypointViewModel[]> {
        // TODO: not this
        return this.waypointsService.getWaypoints().map((waypoints) => {
            let eventWaypointVMs: EventWaypointViewModel[] = [];

            for (let eventWaypoint of eventWaypoints) {
                eventWaypointVMs.push({
                    description: eventWaypoint.description,
                    waypoint: waypoints.find(wp => wp.id === eventWaypoint.waypointId)
                });
            }

            return eventWaypointVMs;
        });
    }
}