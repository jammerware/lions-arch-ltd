import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { ContentService } from './content.service';
import { ErrorService } from './error.service';
import { GoalsService } from './goals.service';

import { Goal } from '../../shared/models/goal';
import { GoalContribution } from '../../shared/models/goal-contribution';
import { GoalContributionViewModel } from '../../viewmodels/goal-contribution.viewmodel';

@Injectable()
export class GoalContributionsService {
    constructor(
        private contentService: ContentService,
        private goalsService: GoalsService,
        private errorService: ErrorService
    ) {} 

    getGoalContributionViewModels(goalContributions: GoalContribution[]): Observable<GoalContributionViewModel[]> {
        return this
            .goalsService
            .getGoals()
            .map(
                goals => this.composeGoalContributionViewModels(goalContributions, goals),
                error => this.errorService.logError(error)
            );
    }

    private composeGoalContributionViewModels(goalContributions: GoalContribution[], goals: Goal[]): GoalContributionViewModel[] {
        let result: GoalContributionViewModel[] = [];

        for(let goalContribution of goalContributions) {
            var goal = goals.find(g => g.id == goalContribution.goalId);
            
            result.push({
                description: goalContribution.description,
                goal: {
                    id: goalContribution.goalId,
                    name: goal.name,
                    description: goal.description,
                    iconUrl: this.contentService.getContentUrl(`app/assets/images/icons/${goal.key}.png`)
                }
            });
        };

        return result;
    }
}