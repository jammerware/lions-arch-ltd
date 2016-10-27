import { Inject, Pipe, PipeTransform } from '@angular/core';

// this is going to be a pretty ugly implementation of this, but it turns out that parsing markdown is quite difficult.
// at least, if you're me. but hey, it's modular, so we can fix it later.
@Pipe({name: 'markdown'})
export class MarkdownPipe implements PipeTransform {
  transform(markdown: string): string {
    let output = markdown;

    output = this.replaceLinkSyntax(output);
    output = this.replaceBold(output);
    output = this.replaceItalics(output);
    output = this.replaceHeaders(output);

    return output;
  }

  replaceLinkSyntax(markdown: string): string {
    return markdown.replace(/\[([^\]]+)\]\((\S+)\)/, function(match, group1, group2) {
      return `<a rel="noopener noreferrer" target="_blank" href="${group2}">${group1}</a>`;
    });
  }

  replaceBold(markdown: string): string {
    return markdown.replace(/\*([^*]+)\*/, function(match, group1) {
      return `<strong>${group1}</strong>`;
    });
  }

  replaceItalics(markdown: string): string {
    return markdown.replace(/_([^_]+)_/, function(match, group1) {
      return `<em>${group1}</em>`;
    });
  }

  replaceHeaders(markdown: string): string {
    return markdown.replace(/(#{1,6})([\s\S]+)/, function(match, headerStrengthGroup, textGroup) {
      return `<h${headerStrengthGroup.length}>${textGroup}</h${headerStrengthGroup.length}>`;
    });
  }
}