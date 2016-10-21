import { Inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'markdown'})
export class MarkdownPipe implements PipeTransform {
  transform(markdown: string): string {
    return 'markdown fail';
  }
}