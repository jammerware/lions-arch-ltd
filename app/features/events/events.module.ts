import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { EventsComponent }   from './events.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventComponent } from './event/event.component';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
    imports: [
        EventsRoutingModule, 
        SharedModule 
    ],
    exports: [ EventsRoutingModule ],
    declarations: [
        EventCardComponent,
        EventComponent,
        EventsComponent
    ]
})
export class EventsModule { }