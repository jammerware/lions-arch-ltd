import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ClipboardModule } from '../modules/clipboard/clipboard.module';

import { MarkdownPipe } from './pipes/markdown.pipe';
import { SlugPipe } from './pipes/slug.pipe';
import { TimeUntilPipe } from './pipes/time-until.pipe';

import { GoalIconComponent } from './components/goal-icon/goal-icon.component';
import { WaypointComponent } from './components/waypoint/waypoint.component';

@NgModule({
  declarations: [
    GoalIconComponent,
    MarkdownPipe,
    SlugPipe,
    TimeUntilPipe,
    WaypointComponent
  ],
  imports: [
    ClipboardModule,
    CommonModule,
    MaterialModule.forRoot(),
  ],
  exports: [
    ClipboardModule,
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