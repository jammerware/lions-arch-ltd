import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { GoalContributionsModule } from '../goal-contributions/goal-contributions.module';

import { EventsComponent }   from './events.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventComponent } from './event/event.component';
import { EventWaypointComponent } from './event-waypoint/event-waypoint.component';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
    imports: [
        EventsRoutingModule,
        GoalContributionsModule,
        SharedModule
    ],
    exports: [ EventsRoutingModule ],
    declarations: [
        EventCardComponent,
        EventComponent,
        EventsComponent,
        EventWaypointComponent
    ]
})
export class EventsModule { }