import { Component, Inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { Event } from '../../../shared/models/event';
import { EventViewModel } from '../../../shared/viewmodels/event.viewmodel';
import { EventViewModelsService } from '../../../core/services/viewmodels-services/event-viewmodels.service';

@Component({
  moduleId: module.id,
  selector: 'event-card',
  styleUrls: ['event-card.component.css'],
  templateUrl: 'event-card.component.html'
})
export class EventCardComponent implements OnInit {
  @Input() event: Event;
  viewmodel: Observable<EventViewModel>;

  constructor(private eventViewModelsService: EventViewModelsService) { }

  ngOnInit(): void {
    this.viewmodel = this.eventViewModelsService.getViewModel(event);
  }
}