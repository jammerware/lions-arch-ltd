import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../../models/event';
import { Goal } from '../../../models/goal';
import { GoalContribution } from '../../../models/goal-contribution';
import { EventCardViewModel } from '../../../viewmodels/event-card.viewmodel';
import { GoalContributionViewModel} from '../../../viewmodels/goal-contribution.viewmodel';
import { ContentService } from '../../../core/services/content.service';
import { EventsService } from '../../../services/events.service';
import { GoalsService } from '../../../services/goals.service';
import { ILocalizationService, ILOCALIZATIONSERVICE } from '../../../services/localization/ilocalization.service';

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
    private contentService: ContentService,
    private eventsService: EventsService,
    private goalsService: GoalsService,
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
      goalContributions: [],
      msTilNextOccurrence: 0
    };

    // todo: observable?
    this.goalsService.getGoals().then(goals => {
      let goalContributionViewModels: GoalContributionViewModel[] = [];

      for(let goalContribution of event.goalContributions) {
        let goal: Goal = goals.find(g => g.id == goalContribution.goalId);
        goalContributionViewModels.push(this.composeGoalContributionViewModel(goalContribution, goal));
      }

      viewmodel.goalContributions = goalContributionViewModels;
    });

    return viewmodel;
  }

  private composeGoalContributionViewModel(goalContribution: GoalContribution, goal: Goal): GoalContributionViewModel {
    return {
      description: goalContribution.description,
      goal: {
        id: goalContribution.goalId,
        name: goal.name,
        description: goal.description,
        iconUrl: this.contentService.getContentUrl(`app/assets/images/icons/${goal.key}.png`)
      }
    };
  }

  private setMsTilNextOccurrence(): void {
    this.eventsService
      .getMsTilNextOccurrenceOf(this.event)
      .then(result => this.viewmodel.msTilNextOccurrence = result);

    setTimeout(() => { this.setMsTilNextOccurrence(); }, 30000);
  }
}