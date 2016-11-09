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
const mock_dailies_1 = require('../mock-data/mock-dailies');
let DailiesService = class DailiesService {
    getDailies() {
        return Observable_1.Observable.of(mock_dailies_1.DAILIES);
    }
};
DailiesService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], DailiesService);
exports.DailiesService = DailiesService;
//# sourceMappingURL=dailies.service.js.map