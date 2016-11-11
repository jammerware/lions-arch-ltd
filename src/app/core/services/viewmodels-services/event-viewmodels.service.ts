import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Event } from '../../../shared/models/event';
import { EventViewModel } from '../../../shared/viewmodels/event.viewmodel';
import { EventsService } from '../events.service';
import { ILocalizationService, ILOCALIZATIONSERVICE } from '../localization/ilocalization.service';
import { EventWaypointViewModelsService } from './event-waypoint-viewmodels.service';
import { GoalContributionsViewModelsService } from './goal-contributions-viewmodels.service';
import { WaypointsService } from '../waypoints.service';

@Injectable()
export class EventViewModelsService {
    constructor(
        private eventsService: EventsService,
        private eventWaypointViewModelsService: EventWaypointViewModelsService,
        private goalContributionsViewModelsService: GoalContributionsViewModelsService,
        @Inject(ILOCALIZATIONSERVICE) private localizationService: ILocalizationService,
        private waypointsService: WaypointsService
    ) { }

    public getViewModel(event: Event): Observable<EventViewModel> {
        let viewmodel: EventViewModel = {
            id: event.id,
            name: event.name,
            zone: event.zone,
            description: event.description,
            primaryWaypoint: this.waypointsService.getWaypoint(event.primaryWaypointId),
            waypoints: this.eventWaypointViewModelsService.getEventWaypointViewModels(event.waypoints),
            guide: event.guide,
            goalContributions: this.goalContributionsViewModelsService.getViewModels(event.goalContributions),
            msTilNextOccurrence: this.eventsService.getMsTilNextOccurrenceOf(event),
            countdownText: this.localizationService.getCountdownText(event.key)
        };
        
        return Observable.of(viewmodel);
    }
}