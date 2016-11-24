import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsLandingComponent } from './events-landing/events-landing.component';
import { EventComponent } from './event/event.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'events', component: EventsLandingComponent },
            { path: 'event/:slug/:id', component: EventComponent }
        ])
    ],
    exports: [RouterModule]
})
export class EventsRoutingModule { }