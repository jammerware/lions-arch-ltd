import { NgModule } from '@angular/core';

import { MarkdownPipe } from './pipes/markdown.pipe';
import { SlugPipe } from './pipes/slug.pipe';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MarkdownPipe, SlugPipe],
  exports: [MarkdownPipe, SlugPipe, CommonModule]
})
export class SharedModule { }