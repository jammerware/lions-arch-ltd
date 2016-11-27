import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EventsService } from '../../../core/services/events-service/events.service';
import { EventViewModelsService } from '../../../core/services/viewmodels-services/event-viewmodels.service';
import { EventViewModel } from '../../../shared/viewmodels/event.viewmodel';

@Component({
  styleUrls: ['events-landing.component.css'],
  templateUrl: 'events-landing.component.html'
})
export class EventsLandingComponent implements OnInit {
  events: Observable<EventViewModel[]>;

  constructor(
    private eventsService: EventsService,
    private eventViewModelsService: EventViewModelsService) { }

  ngOnInit(): void {
    this.events = this.eventsService
      .getEvents()
      .map(events => {
        let eventViewModels: EventViewModel[] = [];

        for (let event of events) {
          eventViewModels.push(this.eventViewModelsService.getViewModel(event));
        }

        return eventViewModels;
      });
  }
}