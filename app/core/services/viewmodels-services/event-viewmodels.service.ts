import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { Event } from '../../../shared/models/event';
import { EventViewModel } from '../../../shared/viewmodels/event.viewmodel';
import { EventsService } from '../events.service';
import { GoalContributionsViewModelsService } from './goal-contributions-viewmodels.service';

@Injectable()
export class EventViewModelsService {
    constructor(
        private eventsService: EventsService,
        private goalContributionsViewModelsService: GoalContributionsViewModelsService
    ) { }

    public getViewModel(event: Event): Observable<EventViewModel> {
        return Observable.of({
            name: event.name,
            zone: event.zone,
            description: event.description,
            guide: event.guide,
            goalContributions: this.goalContributionsViewModelsService.getViewModels(event.goalContributions),
            timeTilNextOccurrence: this.eventsService.getMsTilNextOccurrenceOf(event)
        });
    }
}