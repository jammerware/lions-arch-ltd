import { Component, Input } from '@angular/core';
import { EventWaypointViewModel } from '../../../shared/viewmodels/event-waypoint.viewmodel';

@Component({
    selector: 'event-waypoint',
    templateUrl: './event-waypoint.component.html'
})
export class EventWaypointComponent {
    @Input() eventWaypointViewModel: EventWaypointViewModel;
}