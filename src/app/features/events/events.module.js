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
const goal_contributions_module_1 = require('../goal-contributions/goal-contributions.module');
const events_component_1 = require('./events.component');
const event_card_component_1 = require('./event-card/event-card.component');
const event_component_1 = require('./event/event.component');
const events_routing_module_1 = require('./events-routing.module');
let EventsModule = class EventsModule {
};
EventsModule = __decorate([
    core_1.NgModule({
        imports: [
            events_routing_module_1.EventsRoutingModule,
            goal_contributions_module_1.GoalContributionsModule,
            shared_module_1.SharedModule
        ],
        exports: [events_routing_module_1.EventsRoutingModule],
        declarations: [
            event_card_component_1.EventCardComponent,
            event_component_1.EventComponent,
            events_component_1.EventsComponent
        ]
    }), 
    __metadata('design:paramtypes', [])
], EventsModule);
exports.EventsModule = EventsModule;
//# sourceMappingURL=events.module.js.map