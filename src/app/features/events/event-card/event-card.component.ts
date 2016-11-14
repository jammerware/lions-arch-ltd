import { Component, Input, OnInit } from '@angular/core';

import { Event } from '../../../shared/models/event';
import { EventViewModel } from '../../../shared/viewmodels/event.viewmodel';
import { EventViewModelsService } from '../../../core/services/viewmodels-services/event-viewmodels.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'event-card',
  styleUrls: ['./event-card.component.css'],
  templateUrl: './event-card.component.html'
})
export class EventCardComponent implements OnInit {
  @Input() event: Event;

  private viewModel: EventViewModel; 

  constructor(private eventViewModelsService: EventViewModelsService) { }

  ngOnInit(): void {
    this.viewModel = this.eventViewModelsService.getViewModel(this.event);
  }
}