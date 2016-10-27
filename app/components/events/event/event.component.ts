import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Event } from '../../../models/event';
import { EventViewModel } from '../../../viewmodels/event.viewmodel';
import { EventsService } from '../../../services/events.service';

@Component({
  moduleId: module.id,
  selector: 'event',
  styleUrls: ['event.component.css'],
  templateUrl: 'event.component.html'
})
export class EventComponent implements OnInit {
  public viewmodel: EventViewModel;

  constructor(private route: ActivatedRoute, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.eventsService.getEvents().then(events => this.viewmodel = this.composeEventViewModel(events.find(e => e.id == id)));
    });
  }

  composeEventViewModel(event: Event): EventViewModel {
    return {
      name: event.name,
      zone: event.zone,
      description: event.description,
      guide: event.guide
    };
  }
}