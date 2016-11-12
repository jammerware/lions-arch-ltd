import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EventViewModel } from '../../../shared/viewmodels/event.viewmodel';
import { EventViewModelsService } from '../../../core/services/viewmodels-services/event-viewmodels.service';
import { EventsService } from '../../../core/services/events-service/events.service';

@Component({
  selector: 'event',
  styleUrls: ['./event.component.css'],
  templateUrl: './event.component.html'
})
export class EventComponent implements OnInit {
  public viewModel: EventViewModel;

  constructor(
    private route: ActivatedRoute, 
    private eventsService: EventsService,
    private eventViewModelsService: EventViewModelsService
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];

      // TODO: this can't be right
      this.eventsService
        .getEvent(id)
        .subscribe(event => this.eventViewModelsService
          .getViewModel(event)
          .subscribe(vm => this.viewModel = vm)
        );
    });
  }
}