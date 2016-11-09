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
const common_1 = require('@angular/common');
const material_1 = require('@angular/material');
const markdown_pipe_1 = require('./pipes/markdown.pipe');
const slug_pipe_1 = require('./pipes/slug.pipe');
const time_until_pipe_1 = require('./pipes/time-until.pipe');
const waypoint_component_1 = require('./components/waypoint/waypoint.component');
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    core_1.NgModule({
        declarations: [
            markdown_pipe_1.MarkdownPipe,
            slug_pipe_1.SlugPipe,
            time_until_pipe_1.TimeUntilPipe,
            waypoint_component_1.WaypointComponent
        ],
        imports: [
            material_1.MaterialModule.forRoot(),
        ],
        exports: [
            material_1.MaterialModule,
            common_1.CommonModule,
            markdown_pipe_1.MarkdownPipe,
            material_1.MaterialModule,
            slug_pipe_1.SlugPipe,
            time_until_pipe_1.TimeUntilPipe,
            waypoint_component_1.WaypointComponent
        ]
    }), 
    __metadata('design:paramtypes', [])
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map