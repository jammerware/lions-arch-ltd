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
const ilocalization_service_1 = require('../../core/services/localization/ilocalization.service');
let TimeUntilPipe = class TimeUntilPipe {
    constructor(localizationService) {
        this.localizationService = localizationService;
    }
    transform(milliseconds) {
        if (!milliseconds || milliseconds < 0)
            return this.localizationService.unspecifiedError;
        else if (milliseconds < 60000)
            return "anytime now!";
        // minutes
        var remaining = Math.round(milliseconds / 60000);
        if (remaining < 60) {
            if (remaining == 1)
                return `${this.localizationService.inAbout} ${this.localizationService.aMinute}`;
            return `${this.localizationService.inAbout} ${remaining} ${this.localizationService.minutes}`;
        }
        // hours
        remaining = Math.round(remaining / 60);
        if (remaining < 24) {
            if (remaining == 1)
                return `${this.localizationService.inAbout} ${this.localizationService.anHour}`;
            return `${this.localizationService.inAbout} ${remaining} ${this.localizationService.hours}`;
        }
        // days
        remaining = Math.round(remaining / 24);
        if (remaining < 7) {
            if (remaining == 1)
                return `${this.localizationService.inAbout} ${this.localizationService.aDay}`;
            return `${this.localizationService.inAbout} ${remaining} ${this.localizationService.days}`;
        }
        return this.localizationService.inALongTime;
    }
};
TimeUntilPipe = __decorate([
    core_1.Pipe({ name: 'timeUntil' }),
    __param(0, core_1.Inject(ilocalization_service_1.ILOCALIZATIONSERVICE)), 
    __metadata('design:paramtypes', [Object])
], TimeUntilPipe);
exports.TimeUntilPipe = TimeUntilPipe;
//# sourceMappingURL=time-until.pipe.js.map