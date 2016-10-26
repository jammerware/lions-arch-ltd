import { NgModule } from '@angular/core';

import { MarkdownPipe } from './pipes/markdown.pipe';

@NgModule({
  declarations: [MarkdownPipe],
  exports: [MarkdownPipe]
})
export class SharedModule { }