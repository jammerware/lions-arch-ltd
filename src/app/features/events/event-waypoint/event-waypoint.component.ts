import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EventWaypointViewModel } from '../../../shared/viewmodels/event-waypoint.viewmodel';

@Component({
    selector: 'lal-event-waypoint',
    styleUrls: [ 'event-waypoint.component.css' ],
    templateUrl: 'event-waypoint.component.html'
})
export class EventWaypointComponent implements OnChanges {
    @Input() viewModel: EventWaypointViewModel;
    private clipboardText: string;

    ngOnChanges(changes: SimpleChanges): void {
        this.clipboardText = this.viewModel.waypoint.code;
    }
}