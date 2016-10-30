import { NgModule } from '@angular/core';
import { TimespanModule } from '../timespan/timespan.module';

import { ContentService } from './services/content.service';
import { ErrorService } from './services/error.service';
import { EventsService } from './services/events.service';
import { GoalContributionsService } from './services/goal-contributions.service';
import { GoalsService } from './services/goals.service';
import { LoggingService } from './services/logging.service';
import { localizationServiceProvider } from './services/localization/localization-service.provider';
import { TimespanService } from '../timespan/timespan.service';

@NgModule({
  providers: [
    ContentService,
    ErrorService,
    EventsService,
    GoalContributionsService,
    GoalsService,
    localizationServiceProvider,
    LoggingService,
    TimespanService
  ]
})
export class CoreModule { }