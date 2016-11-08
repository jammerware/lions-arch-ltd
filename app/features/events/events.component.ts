import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EventsService } from '../../core/services/events.service';
import { Event } from '../../shared/models/event';

@Component({
  moduleId: module.id,
  styleUrls: ['events.component.css'],
  templateUrl: 'events.component.html'
})
export class EventsComponent implements OnInit {
  events: Observable<Event[]>;

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }
}