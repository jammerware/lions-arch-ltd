import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AssetService } from '../asset.service';
import { ErrorService } from '../error.service';
import { Goal } from '../../../shared/models/goal';
import { GoalContribution } from '../../../shared/models/goal-contribution';
import { GoalContributionViewModel } from '../../../shared/viewmodels/goal-contribution.viewmodel';
import { GoalsService } from '../goals.service';

@Injectable()
export class GoalContributionsViewModelsService {
    constructor(
        private assetService: AssetService,
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

        if (!goalContributions) { return result; }

        for (let goalContribution of goalContributions) {
            let goal = goals.find(g => g.id === goalContribution.goalId);

            result.push({
                description: goalContribution.description,
                goal: {
                    id: goalContribution.goalId,
                    name: goal.name,
                    description: goal.description,
                    iconUrl: this.assetService.getUrl(`images/icons/${goal.key}.png`),
                    key: goal.key
                }
            });
        };

        return result;
    }
}