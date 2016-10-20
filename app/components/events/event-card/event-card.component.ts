import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../../models/event';
import { EventsService } from '../../../services/events.service';

@Component({
  moduleId: module.id,
  selector: 'event-card',
  styleUrls: ['event-card.component.css'],
  templateUrl: 'event-card.component.html'
})
export class EventCardComponent implements OnInit {
  msTilNextOccurrence: number;

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.setMsTilNextOccurrence();
    setTimeout(() => { this.setMsTilNextOccurrence(); }, 30000);
  }

  private setMsTilNextOccurrence(): void {
    this.eventsService
      .getMsTilNextOccurrenceOf(this.event)
      .then(result => this.msTilNextOccurrence = result);
  }

  @Input()
  event: Event;
}