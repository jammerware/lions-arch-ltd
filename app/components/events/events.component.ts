import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { TimespanService } from '../../services/timespan.service';
import { Event } from '../../models/event';

@Component({
  moduleId: module.id,
  styleUrls: ['events.component.css'],
  templateUrl: 'events.component.html'
})
export class EventsComponent implements OnInit {
  events: Event[];

  constructor(private eventsService: EventsService, private timespanService: TimespanService) { }

  ngOnInit(): void {
    this.getEvents();
    this.timespanService.getMsSinceMidnightUtc();
  }

  getEvents(): void {
    this.eventsService.getEvents().then(events => this.events = events);
  }
}