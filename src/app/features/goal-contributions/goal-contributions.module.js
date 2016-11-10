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
const shared_module_1 = require('../../shared/shared.module');
const goal_contribution_component_1 = require('./goal-contribution/goal-contribution.component');
let GoalContributionsModule = class GoalContributionsModule {
};
GoalContributionsModule = __decorate([
    core_1.NgModule({
        declarations: [goal_contribution_component_1.GoalContributionComponent],
        exports: [goal_contribution_component_1.GoalContributionComponent],
        imports: [shared_module_1.SharedModule]
    }), 
    __metadata('design:paramtypes', [])
], GoalContributionsModule);
exports.GoalContributionsModule = GoalContributionsModule;
//# sourceMappingURL=goal-contributions.module.js.map