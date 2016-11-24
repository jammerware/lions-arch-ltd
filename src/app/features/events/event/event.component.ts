import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { EventViewModel } from '../../../shared/viewmodels/event.viewmodel';
import { EventViewModelsService } from '../../../core/services/viewmodels-services/event-viewmodels.service';
import { EventsService } from '../../../core/services/events-service/events.service';

@Component({
  selector: 'lal-event',
  styleUrls: ['./event.component.css'],
  templateUrl: './event.component.html'
})
export class EventComponent implements OnInit, OnDestroy {
  private routeParamsSubscription: Subscription;
  private activeGetEventSubscription: Subscription;
  public viewModel: EventViewModel;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService,
    private eventViewModelsService: EventViewModelsService,
    private changeDetector: ChangeDetectorRef
  ) { }

  loadViewModelFromRouteParams(params: Params) {
    let id = params['id'];

    if (id) {
      if (this.activeGetEventSubscription) { this.activeGetEventSubscription.unsubscribe(); }

      // TODO: why do i have to call subscribe here? i expected that .map would work.
      this.activeGetEventSubscription = this.eventsService
        .getEvent(id)
        .subscribe(event => {
          this.viewModel = this.eventViewModelsService.getViewModel(event);
          // think this is required because we're changing the viewmodel property, not the properties of the viewmodel itself
          this.changeDetector.detectChanges();
        });
    }
  }

  ngOnInit(): void {
    this.routeParamsSubscription = this.route.params.subscribe((params) => {
      this.loadViewModelFromRouteParams(params);
    });
  }

  ngOnDestroy(): void {
    if (this.routeParamsSubscription) { this.routeParamsSubscription.unsubscribe(); }
  }
}