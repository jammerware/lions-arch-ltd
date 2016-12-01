import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/combineLatest';
import '../../../modules/tslinq/tslinq';

import { Event } from '../../../shared/models/event';
import { EventType } from '../../../shared/models/event-type';
import { EventsService } from '../../../core/services/events-service/events.service';
import { EventViewModelsService } from '../../../core/services/viewmodels-services/event-viewmodels.service';
import { EventsLandingViewModel } from '../components/events-landing/viewmodels/events-landing.viewmodel';

@Injectable()
export class EventsLandingViewModelService {
    constructor(
        private eventsService: EventsService,
        private eventViewModelsService: EventViewModelsService) { }

    getEventsLandingViewModel(): Observable<EventsLandingViewModel> {
        return Observable.combineLatest(
            this.eventsService.getEvents(),
            this.eventsService.getEventTypes(),
            (events: Event[], eventTypes: EventType[]) => {
                let eventsLandingViewModel = new EventsLandingViewModel();

                for (let eventType of eventTypes) {
                    eventsLandingViewModel.eventTypeGroups.push({
                        eventType: eventType,
                        events: []
                    });
                }

                for (let event of events) {
                    let eventTypeGroupViewModel = eventsLandingViewModel.eventTypeGroups.first(group => group.eventType.id === event.eventTypeId);
                    eventTypeGroupViewModel.events.push(this.eventViewModelsService.getViewModel(event));
                }

                console.log(eventsLandingViewModel);

                return eventsLandingViewModel;
            }
        );
    }
}