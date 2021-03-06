// external modules
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PushNotificationsModule } from 'angular2-notifications';

// general application services
import { AssetService } from './services/asset.service';
import { AudioPlaybackService } from './services/audio-playback-service/audio-playback.service';
import { BrowserStorageService } from './services/browser-storage.service';
import { ErrorService } from './services/error.service';
import { EventNotificationsService } from './services/event-notifications-service/event-notifications.service';
import { EventsService } from './services/events-service/events.service';
import { EventViewModelsService } from './services/viewmodels-services/event-viewmodels.service';
import { EventWaypointViewModelsService } from './services/viewmodels-services/event-waypoint-viewmodels.service';
import { FractalsService } from './services/fractals-service/fractals.service';
import { GoalsService } from './services/goals.service';
import { GoalContributionsViewModelsService } from './services/viewmodels-services/goal-contributions-viewmodels.service';
import { LoggingService } from './services/logging.service';
import { localizationServiceProvider } from './services/localization/localization-service.provider';
import { NotificationsService } from './services/notifications.service';
import { NowService } from './services/now.service';
import { SettingsService } from './services/settings-service/settings.service';
import { SfxService } from './services/sfx-service';
import { SlugService } from './services/slug-service/slug.service';
import { ToastService } from './services/toast.service';
import { WaypointsService } from './services/waypoints.service';

@NgModule({
  imports: [
    HttpModule,
    PushNotificationsModule
  ],
  providers: [
    AssetService,
    AudioPlaybackService,
    BrowserStorageService,
    ErrorService,
    EventsService,
    EventNotificationsService,
    EventViewModelsService,
    EventWaypointViewModelsService,
    FractalsService,
    GoalsService,
    GoalContributionsViewModelsService,
    localizationServiceProvider,
    LoggingService,
    NotificationsService,
    NowService,
    SettingsService,
    SfxService,
    SlugService,
    ToastService,
    WaypointsService
  ]
})
export class CoreModule { }