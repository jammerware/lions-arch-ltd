import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Event } from '../../../shared/models/event';
import { EventViewModel } from '../../../shared/viewmodels/event.viewmodel';
import { EventViewModelsService } from '../../../core/services/viewmodels-services/event-viewmodels.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'event-card',
  styleUrls: ['./event-card.component.css'],
  templateUrl: './event-card.component.html'
})
export class EventCardComponent implements OnInit, OnDestroy {
  @Input() event: Event;

  viewModel: EventViewModel;
  private viewModelObservableSubscription: Subscription; 

  constructor(private eventViewModelsService: EventViewModelsService) { }

  ngOnInit(): void {
    this.viewModelObservableSubscription = this.eventViewModelsService
      .getViewModel(this.event)
      .subscribe(vm => this.viewModel = vm);
  }

  ngOnDestroy(): void {
    this.viewModelObservableSubscription.unsubscribe();
  }
}