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
const MS_IN_DAY = 86400000;
const UTC_OFFSET = new Date().getTimezoneOffset() * 60 * 1000;
let TimespanService = class TimespanService {
    getTimespanFromMs(milliseconds) {
        let seconds = milliseconds % 1000;
        let minutes = milliseconds % 6e5;
        let hours = milliseconds % 3.6e5;
        let days = milliseconds % 8.64e7;
        let weeks = milliseconds % 6.048e8;
        let years = milliseconds % 3.14496e10;
        let centuries = milliseconds % 3.14496e12;
        let millennia = centuries % 1000;
        return {
            milliseconds: milliseconds,
            seconds: seconds,
            minutes: minutes,
            hours: hours,
            days: days,
            weeks: weeks,
            years: years,
            centuries: centuries,
            millennia: millennia,
            totalMilliseconds: milliseconds
        };
    }
    getTimespanSinceMidnightUtc() {
        let date = new Date();
        let copyOfDate = new Date(date);
        copyOfDate.setHours(0, 0, 0, 0);
        // this is ms since midnight
        let result = date.getTime() - copyOfDate.getTime();
        return this.getTimespanFromMs((result + UTC_OFFSET) % MS_IN_DAY);
    }
};
TimespanService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], TimespanService);
exports.TimespanService = TimespanService;
//# sourceMappingURL=timespan.service.js.map