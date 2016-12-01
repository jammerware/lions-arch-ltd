import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsLandingComponent } from './components/events-landing/events-landing.component';
import { EventComponent } from './components/event/event.component';

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