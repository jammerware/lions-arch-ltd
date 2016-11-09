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
let EnLocalizationService = class EnLocalizationService {
    constructor() {
        // expressions
        this.inAbout = "in about";
        this.inALongTime = "in a really freaking long time";
        // actual units of time
        this.second = "second";
        this.seconds = "seconds";
        this.minute = "minute";
        this.minutes = "minutes";
        this.hour = "hour";
        this.hours = "hours";
        this.day = "day";
        this.days = "days";
        this.week = "week";
        this.weeks = "weeks";
        this.month = "month";
        this.months = "months";
        this.year = "year";
        this.years = "years";
        // colloquial expressions of time
        this.aMinute = "a minute";
        this.anHour = "an hour";
        this.aDay = "a day";
        // oops
        this.unspecifiedError = 'Something\'s not quite right...';
        // countdown text
        this.COUNTDOWN_TEXT = {
            ab: "The lootsplosion begins",
            ds: "The Mouth opens",
            vb: "Night falls",
        };
    }
    getCountdownText(eventKey) {
        return this.COUNTDOWN_TEXT[eventKey] || "Starts";
    }
};
EnLocalizationService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], EnLocalizationService);
exports.EnLocalizationService = EnLocalizationService;
//# sourceMappingURL=localization.en.service.js.map