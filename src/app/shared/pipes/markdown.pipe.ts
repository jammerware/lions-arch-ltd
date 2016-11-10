import { Inject, Pipe, PipeTransform } from '@angular/core';
import * as Showdown from 'showdown';

// this is going to be a pretty ugly implementation of this, but it turns out that parsing markdown is quite difficult.
// at least, if you're me. but hey, it's modular, so we can fix it later.
@Pipe({name: 'markdown'})
export class MarkdownPipe implements PipeTransform {
  transform(markdown: string): string {
    if(!markdown) return '';
    
    let output = markdown;
    let converter = new Showdown.Converter();
    
    return `<div class="markdown">${converter.makeHtml(output)}</div>`;
  }
}