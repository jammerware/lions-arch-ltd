import { NgModule } from '@angular/core';
import { TimespanModule } from '../timespan/timespan.module';

import { ContentService } from './services/content.service';
import { ErrorService } from './services/error.service';
import { EventsService } from './services/events.service';
import { EventViewModelsService } from './services/viewmodels-services/event-viewmodels.service';
import { GoalsService } from './services/goals.service';
import { GoalContributionsViewModelsService } from './services/viewmodels-services/goal-contributions-viewmodels.service';
import { LoggingService } from './services/logging.service';
import { localizationServiceProvider } from './services/localization/localization-service.provider';
import { TimespanService } from '../timespan/timespan.service';

@NgModule({
  providers: [
    ContentService,
    ErrorService,
    EventsService,
    EventViewModelsService,
    GoalsService,
    GoalContributionsViewModelsService,
    localizationServiceProvider,
    LoggingService,
    TimespanService
  ]
})
export class CoreModule { }