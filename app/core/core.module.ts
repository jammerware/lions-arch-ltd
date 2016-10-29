import { NgModule } from '@angular/core';
import { ContentService } from './services/content.service';
import { LoggingService } from './services/logging.service';

@NgModule({
  providers: [
    ContentService,
    LoggingService
  ]
})
export class CoreModule { }