import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Event } from '../../../models/event';
import { EventsService } from '../../../services/events.service';

@Component({
  moduleId: module.id,
  selector: 'event',
  // styleUrls: ['event.component.css'],
  templateUrl: 'event.component.html'
})
export class EventComponent implements OnInit {
  public event: Event;

  constructor(private route: ActivatedRoute, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.eventsService.getEvents().then(events => this.event = events.find(e => e.id == id));
    });
  }
}