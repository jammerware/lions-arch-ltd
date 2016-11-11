import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Waypoint } from '../../shared/models/waypoint';
import { WAYPOINTS } from '../mock-data/mock-waypoints';

@Injectable()
export class WaypointsService {
    getWaypoint(id: string): Observable<Waypoint> {
        return Observable.of(WAYPOINTS.find(wp => wp.id === id));
    }

    getWaypoints(): Observable<Waypoint[]> {
        return Observable.of(WAYPOINTS);
    }
}