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
// external modules
const core_1 = require('@angular/core');
const clipboard_service_1 = require('./services/clipboard.service');
const content_service_1 = require('./services/content.service');
const error_service_1 = require('./services/error.service');
const events_service_1 = require('./services/events.service');
const event_viewmodels_service_1 = require('./services/viewmodels-services/event-viewmodels.service');
const goals_service_1 = require('./services/goals.service');
const goal_contributions_viewmodels_service_1 = require('./services/viewmodels-services/goal-contributions-viewmodels.service');
const logging_service_1 = require('./services/logging.service');
const localization_service_provider_1 = require('./services/localization/localization-service.provider');
const timespan_service_1 = require('../timespan/timespan.service');
const toast_service_1 = require('./services/toast.service');
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    core_1.NgModule({
        providers: [
            clipboard_service_1.ClipboardService,
            content_service_1.ContentService,
            error_service_1.ErrorService,
            events_service_1.EventsService,
            event_viewmodels_service_1.EventViewModelsService,
            goals_service_1.GoalsService,
            goal_contributions_viewmodels_service_1.GoalContributionsViewModelsService,
            localization_service_provider_1.localizationServiceProvider,
            logging_service_1.LoggingService,
            timespan_service_1.TimespanService,
            toast_service_1.ToastService
        ]
    }), 
    __metadata('design:paramtypes', [])
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map