import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/observable';

import { EventsService } from '../../../core/services/events.service';
import { GoalContributionsService } from '../../../core/services/goal-contributions.service';
import { ILocalizationService, ILOCALIZATIONSERVICE } from '../../../core/services/localization/ilocalization.service';

import { Event } from '../../../shared/models/event';
import { Goal } from '../../../shared/models/goal';
import { GoalContribution } from '../../../shared/models/goal-contribution';
import { EventCardViewModel } from '../../../viewmodels/event-card.viewmodel';
import { GoalContributionViewModel} from '../../../viewmodels/goal-contribution.viewmodel';

@Component({
  moduleId: module.id,
  selector: 'event-card',
  styleUrls: ['event-card.component.css'],
  templateUrl: 'event-card.component.html'
})
export class EventCardComponent implements OnInit {
  @Input() event: Event;
  viewmodel: EventCardViewModel;

  constructor(
    private router: Router,
    private eventsService: EventsService,
    private goalContributionsService: GoalContributionsService,
    @Inject(ILOCALIZATIONSERVICE) private localizationService: ILocalizationService) { }

  ngOnInit(): void {
    this.viewmodel = this.composeEventCardViewModel(this.event);
    this.setMsTilNextOccurrence();
  }

  private composeEventCardViewModel(event: Event): EventCardViewModel {
    let viewmodel: EventCardViewModel = {
      id: event.id,
      name: event.name,
      description: event.description,
      zone: event.zone,
      countdownText: this.localizationService.getCountdownText(event.key),
      goalContributions: this.goalContributionsService.getGoalContributionViewModels(event.goalContributions),
      msTilNextOccurrence: 0
    };

    return viewmodel;
  }

  private setMsTilNextOccurrence(): void {
    this.eventsService
      .getMsTilNextOccurrenceOf(this.event)
      .subscribe(result => this.viewmodel.msTilNextOccurrence = result);

    setTimeout(() => { this.setMsTilNextOccurrence(); }, 30000);
  }
}