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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const core_1 = require('@angular/core');
const Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
const events_service_1 = require('../events.service');
const ilocalization_service_1 = require('../localization/ilocalization.service');
const goal_contributions_viewmodels_service_1 = require('./goal-contributions-viewmodels.service');
let EventViewModelsService = class EventViewModelsService {
    constructor(eventsService, goalContributionsViewModelsService, localizationService) {
        this.eventsService = eventsService;
        this.goalContributionsViewModelsService = goalContributionsViewModelsService;
        this.localizationService = localizationService;
    }
    getViewModel(event) {
        let viewmodel = {
            id: event.id,
            name: event.name,
            zone: event.zone,
            description: event.description,
            primaryWaypoint: event.primaryWaypoint,
            waypoints: event.waypoints,
            guide: event.guide,
            goalContributions: this.goalContributionsViewModelsService.getViewModels(event.goalContributions),
            msTilNextOccurrence: this.eventsService.getMsTilNextOccurrenceOf(event),
            countdownText: this.localizationService.getCountdownText(event.key)
        };
        return Observable_1.Observable.of(viewmodel);
    }
};
EventViewModelsService = __decorate([
    core_1.Injectable(),
    __param(2, core_1.Inject(ilocalization_service_1.ILOCALIZATIONSERVICE)), 
    __metadata('design:paramtypes', [events_service_1.EventsService, goal_contributions_viewmodels_service_1.GoalContributionsViewModelsService, Object])
], EventViewModelsService);
exports.EventViewModelsService = EventViewModelsService;
//# sourceMappingURL=event-viewmodels.service.js.map