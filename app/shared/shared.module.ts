import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { MarkdownPipe } from './pipes/markdown.pipe';
import { SlugPipe } from './pipes/slug.pipe';
import { TimeUntilPipe } from './pipes/time-until.pipe';

@NgModule({
  declarations: [
    MarkdownPipe, 
    SlugPipe,
    TimeUntilPipe
  ],
  imports: [
    MaterialModule.forRoot(),
  ],
  exports: [
    CommonModule,
    MarkdownPipe,
    MaterialModule,
    SlugPipe,
    TimeUntilPipe
  ]
})
export class SharedModule { }