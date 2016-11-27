import { Pipe, PipeTransform } from '@angular/core';
import * as Showdown from 'showdown';

@Pipe({name: 'markdown'})
export class MarkdownPipe implements PipeTransform {
  transform(markdown: string): string {
    if(!markdown) { return ''; };

    let output = markdown;
    let converter = new Showdown.Converter({ 'tables': true });

    return `<div class="markdown">${converter.makeHtml(output)}</div>`;
  }
}