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
const material_1 = require('@angular/material');
let ToastService = class ToastService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    show(message, viewContainerRef) {
        let config = new material_1.MdSnackBarConfig(viewContainerRef);
        this.snackBar.open(message, null, config);
    }
};
ToastService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [material_1.MdSnackBar])
], ToastService);
exports.ToastService = ToastService;
//# sourceMappingURL=toast.service.js.map