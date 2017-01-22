import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Event } from '../../../shared/models/event';
import { EventViewModel } from '../../../shared/viewmodels/event.viewmodel';
import { EventsService } from '../events-service/events.service';
import { ILocalizationService, ILOCALIZATIONSERVICE } from '../localization/ilocalization.service';
import { EventWaypointViewModelsService } from './event-waypoint-viewmodels.service';
import { GoalContributionsViewModelsService } from './goal-contributions-viewmodels.service';
import { NowService } from '../now.service';
import { Timespan } from '../../../modules/timespan/timespan';
import { WaypointsService } from '../waypoints.service';

@Injectable()
export class EventViewModelsService {
  constructor(
    private eventsService: EventsService,
    private eventWaypointViewModelsService: EventWaypointViewModelsService,
    private goalContributionsViewModelsService: GoalContributionsViewModelsService,
    @Inject(ILOCALIZATIONSERVICE) private localizationService: ILocalizationService,
    private nowService: NowService,
    private waypointsService: WaypointsService
  ) { }

  public getViewModel(event: Event): EventViewModel {
    let msTilNextOccurrenceObservable = this.eventsService.getMsTilNextOccurrenceOf(event, 1.2e6);

    return {
      id: event.id,
      name: event.name,
      zone: event.zone,
      description: event.description,
      primaryWaypoint: this.waypointsService.getWaypoint(event.primaryWaypointId),
      waypoints: this.eventWaypointViewModelsService.getEventWaypointViewModels(event.waypoints),
      guide: event.guide,
      goalContributions: this.goalContributionsViewModelsService.getViewModels(event.goalContributions),
      msTilNextOccurrence: msTilNextOccurrenceObservable,
      timeOfNextOccurrence: msTilNextOccurrenceObservable.map(ms => {
        console.log('ms is', ms);
        return this.nowService.addTimespanToDate(this.nowService.get(), Timespan.fromMilliseconds(ms));
      }),
      // TODO: call to getCountdownLocalization
      countdownLocalization: this.localizationService.getCountdownLocalization(event.key, 1)
    };
  }
}