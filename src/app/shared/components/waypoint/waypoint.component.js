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
const clipboard_service_1 = require('../../../core/services/clipboard.service');
const content_service_1 = require('../../../core/services/content.service');
const toast_service_1 = require('../../../core/services/toast.service');
const waypoint_1 = require('../../models/waypoint');
let WaypointComponent = class WaypointComponent {
    constructor(clipboardService, contentService, toastService, viewContainerRef) {
        this.clipboardService = clipboardService;
        this.contentService = contentService;
        this.toastService = toastService;
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        this.iconUrl = this.contentService.getContentUrl('app/assets/images/icons/waypoint.png');
        this.clipboardService.init((clipboardEvent) => this.toastService.show(`Copied ${this.waypoint.code} to clipboard.`, this.viewContainerRef));
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', waypoint_1.Waypoint)
], WaypointComponent.prototype, "waypoint", void 0);
WaypointComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'waypoint',
        styleUrls: ['waypoint.component.css'],
        templateUrl: 'waypoint.component.html'
    }), 
    __metadata('design:paramtypes', [clipboard_service_1.ClipboardService, content_service_1.ContentService, toast_service_1.ToastService, core_1.ViewContainerRef])
], WaypointComponent);
exports.WaypointComponent = WaypointComponent;
//# sourceMappingURL=waypoint.component.js.map