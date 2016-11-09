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
const Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
const mock_events_1 = require('../mock-data/mock-events');
const timespan_service_1 = require('../../timespan/timespan.service');
let EventsService = class EventsService {
    constructor(timespanService) {
        this.timespanService = timespanService;
    }
    getEvent(id) {
        return Observable_1.Observable.of(mock_events_1.EVENTS.find(e => e.id == id));
    }
    getEvents() {
        return Observable_1.Observable.of(mock_events_1.EVENTS);
    }
    getMsTilNextOccurrenceOf(event) {
        let timespanSinceMidnightUtc = this.timespanService.getTimespanSinceMidnightUtc();
        let msSinceMidnightUtc = timespanSinceMidnightUtc.totalMilliseconds;
        let timeOfNextEvent = 0;
        for (let i = event.offsetFromUtcMidnight; timeOfNextEvent < msSinceMidnightUtc; i += event.interval) {
            timeOfNextEvent = i;
        }
        return timeOfNextEvent - msSinceMidnightUtc;
    }
};
EventsService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [timespan_service_1.TimespanService])
], EventsService);
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map