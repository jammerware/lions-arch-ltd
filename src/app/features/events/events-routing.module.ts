import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsComponent } from './events.component';
import { EventComponent } from './event/event.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'events', component: EventsComponent },
            { path: 'event/:slug/:id', component: EventComponent }
        ])
    ],
    exports: [RouterModule]
})
export class EventsRoutingModule { }