import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContentService } from '../content.service';
import { ErrorService } from '../error.service';
import { Goal } from '../../../shared/models/goal';
import { GoalContribution } from '../../../shared/models/goal-contribution';
import { GoalContributionViewModel } from '../../../shared/viewmodels/goal-contribution.viewmodel';
import { GoalsService } from '../goals.service';

@Injectable()
export class GoalContributionsViewModelsService {
    constructor(
        private contentService: ContentService,
        private errorService: ErrorService,
        private goalsService: GoalsService
    ) { }

    getViewModels(goalContributions: GoalContribution[]): Observable<GoalContributionViewModel[]> {
        return this.goalsService
            .getGoals()
            .map(
                goals => this.composeGoalContributionViewModels(goalContributions, goals),
                (error: any) => this.errorService.logError(error)
            );
    }

    private composeGoalContributionViewModels(goalContributions: GoalContribution[], goals: Goal[]): GoalContributionViewModel[] {
        let result: GoalContributionViewModel[] = [];

        for(let goalContribution of goalContributions) {
            let goal = goals.find(g => g.id === goalContribution.goalId);
            
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