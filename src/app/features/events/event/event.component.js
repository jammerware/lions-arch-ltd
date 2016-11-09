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
const router_1 = require('@angular/router');
const event_viewmodels_service_1 = require('../../../core/services/viewmodels-services/event-viewmodels.service');
const events_service_1 = require('../../../core/services/events.service');
let EventComponent = class EventComponent {
    constructor(route, eventsService, eventViewModelsService) {
        this.route = route;
        this.eventsService = eventsService;
        this.eventViewModelsService = eventViewModelsService;
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
            let id = params['id'];
            // TODO: this can't be right
            this.eventsService
                .getEvent(id)
                .subscribe(event => this.eventViewModelsService
                .getViewModel(event)
                .subscribe(vm => this.viewModel = vm));
        });
    }
};
EventComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'event',
        styleUrls: ['event.component.css'],
        templateUrl: 'event.component.html'
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, events_service_1.EventsService, event_viewmodels_service_1.EventViewModelsService])
], EventComponent);
exports.EventComponent = EventComponent;
//# sourceMappingURL=event.component.js.map