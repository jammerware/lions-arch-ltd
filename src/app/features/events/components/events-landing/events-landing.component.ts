import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EventsLandingViewModel } from './viewmodels/events-landing.viewmodel';
import { EventsLandingViewModelService } from '../../services/events-landing-viewmodel.service';

@Component({
  styleUrls: ['./events-landing.component.scss'],
  templateUrl: './events-landing.component.html'
})
export class EventsLandingComponent implements OnInit {
  private viewModel: Observable<EventsLandingViewModel>;

  constructor(
    private eventsLandingViewModelService: EventsLandingViewModelService) { }

  ngOnInit(): void {
    this.viewModel = this.eventsLandingViewModelService.getEventsLandingViewModel();
  }
}