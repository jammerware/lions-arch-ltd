import { Component, OnInit, Input } from '@angular/core';
import { EventWaypointViewModel } from '../../../shared/viewmodels/event-waypoint.viewmodel';

@Component({
    selector: 'event-waypoint',
    templateUrl: './event-waypoint.component.html'
})
export class EventWaypointComponent implements OnInit {
    @Input() eventWaypointViewModel: EventWaypointViewModel;

    ngOnInit(): void {
        console.log(this.eventWaypointViewModel);
    }
}