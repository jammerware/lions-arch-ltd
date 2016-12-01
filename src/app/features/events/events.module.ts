import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { GoalContributionsModule } from '../goal-contributions/goal-contributions.module';

// local services
import { EventsLandingViewModelService } from './services/events-landing-viewmodel.service';

// local components
import { EventsLandingComponent } from './components/events-landing/events-landing.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventComponent } from './components/event/event.component';
import { EventWaypointComponent } from './components/event-waypoint/event-waypoint.component';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
    imports: [
        EventsRoutingModule,
        GoalContributionsModule,
        SharedModule
    ],
    declarations: [
        EventCardComponent,
        EventComponent,
        EventsLandingComponent,
        EventWaypointComponent
    ],
    providers: [EventsLandingViewModelService],
    exports: [EventsRoutingModule]
})
export class EventsModule { }