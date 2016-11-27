import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ClipboardTriggerDirective } from './directives/clipboard-trigger.directive';
import { MarkdownPipe } from './pipes/markdown.pipe';
import { SlugPipe } from './pipes/slug.pipe';
import { TimeUntilPipe } from './pipes/time-until.pipe';

import { GoalIconComponent } from './components/goal-icon/goal-icon.component';
import { WaypointComponent } from './components/waypoint/waypoint.component';

@NgModule({
  declarations: [
    ClipboardTriggerDirective,
    GoalIconComponent,
    MarkdownPipe,
    SlugPipe,
    TimeUntilPipe,
    WaypointComponent
  ],
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
  ],
  exports: [
    ClipboardTriggerDirective,
    CommonModule,
    MarkdownPipe,
    MaterialModule,
    SlugPipe,
    TimeUntilPipe,
    GoalIconComponent,
    WaypointComponent
  ]
})
export class SharedModule { }