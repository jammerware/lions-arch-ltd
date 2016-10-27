import { NgModule } from '@angular/core';
import { ContentService } from './services/content.service';
import { LoggingService } from './services/logging.service';
import { SluggingService } from './services/slugging.service';

@NgModule({
  providers: [
    ContentService,
    LoggingService,
    SluggingService
  ]
})
export class CoreModule { }