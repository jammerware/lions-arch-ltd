// external modules
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TimespanModule } from '../timespan/timespan.module';

import { AssetService } from './services/asset.service';
import { ClipboardService } from './services/clipboard.service';
import { ErrorService } from './services/error.service';
import { EventsService } from './services/events.service';
import { EventViewModelsService } from './services/viewmodels-services/event-viewmodels.service';
import { GoalsService } from './services/goals.service';
import { GoalContributionsViewModelsService } from './services/viewmodels-services/goal-contributions-viewmodels.service';
import { LoggingService } from './services/logging.service';
import { localizationServiceProvider } from './services/localization/localization-service.provider';
import { TimespanService } from '../timespan/timespan.service';
import { ToastService } from './services/toast.service';

@NgModule({
  providers: [
    AssetService,
    ClipboardService,
    ErrorService,
    EventsService,
    EventViewModelsService,
    GoalsService,
    GoalContributionsViewModelsService,
    localizationServiceProvider,
    LoggingService,
    TimespanService,
    ToastService
  ]
})
export class CoreModule { }