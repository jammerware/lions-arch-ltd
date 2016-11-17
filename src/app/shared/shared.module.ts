import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ClipboardTriggerDirective } from './directives/clipboard-trigger.directive';
import { MarkdownPipe } from './pipes/markdown.pipe';
import { SlugPipe } from './pipes/slug.pipe';
import { TimeUntilPipe } from './pipes/time-until.pipe';
import { WaypointComponent } from './components/waypoint/waypoint.component';

@NgModule({
  declarations: [
    ClipboardTriggerDirective,
    MarkdownPipe,
    SlugPipe,
    TimeUntilPipe,
    WaypointComponent
  ],
  imports: [
    MaterialModule.forRoot(),
  ],
  exports: [
    ClipboardTriggerDirective,
    MaterialModule,
    CommonModule,
    MarkdownPipe,
    MaterialModule,
    SlugPipe,
    TimeUntilPipe,
    WaypointComponent
  ]
})
export class SharedModule { }