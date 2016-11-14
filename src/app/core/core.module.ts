// external modules
import { NgModule } from '@angular/core';
import { PushNotificationsModule } from 'angular2-notifications';

import { AssetService } from './services/asset.service';
import { ClipboardService } from './services/clipboard.service';
import { ErrorService } from './services/error.service';
import { EventsService } from './services/events-service/events.service';
import { EventViewModelsService } from './services/viewmodels-services/event-viewmodels.service';
import { EventWaypointViewModelsService } from './services/viewmodels-services/event-waypoint-viewmodels.service';
import { GoalsService } from './services/goals.service';
import { GoalContributionsViewModelsService } from './services/viewmodels-services/goal-contributions-viewmodels.service';
import { LoggingService } from './services/logging.service';
import { localizationServiceProvider } from './services/localization/localization-service.provider';
import { NotificationsService } from './services/notifications.service';
import { NowService } from './services/now.service';
import { TimespanService } from '../timespan/timespan.service';
import { ToastService } from './services/toast.service';
import { WaypointsService } from './services/waypoints.service';

@NgModule({
  imports: [
    PushNotificationsModule
  ],
  providers: [
    AssetService,
    ClipboardService,
    ErrorService,
    EventsService,
    EventViewModelsService,
    EventWaypointViewModelsService,
    GoalsService,
    GoalContributionsViewModelsService,
    localizationServiceProvider,
    LoggingService,
    NotificationsService,
    NowService,
    TimespanService,
    ToastService,
    WaypointsService
  ]
})
export class CoreModule { }