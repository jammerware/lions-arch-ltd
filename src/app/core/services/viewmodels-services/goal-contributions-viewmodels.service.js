"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const content_service_1 = require('../content.service');
const error_service_1 = require('../error.service');
const goals_service_1 = require('../goals.service');
let GoalContributionsViewModelsService = class GoalContributionsViewModelsService {
    constructor(contentService, errorService, goalsService) {
        this.contentService = contentService;
        this.errorService = errorService;
        this.goalsService = goalsService;
    }
    getViewModels(goalContributions) {
        return this.goalsService
            .getGoals()
            .map(goals => this.composeGoalContributionViewModels(goalContributions, goals), error => this.errorService.logError(error));
    }
    composeGoalContributionViewModels(goalContributions, goals) {
        let result = [];
        for (let goalContribution of goalContributions) {
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
        }
        ;
        return result;
    }
};
GoalContributionsViewModelsService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [content_service_1.ContentService, error_service_1.ErrorService, goals_service_1.GoalsService])
], GoalContributionsViewModelsService);
exports.GoalContributionsViewModelsService = GoalContributionsViewModelsService;
//# sourceMappingURL=goal-contributions-viewmodels.service.js.map