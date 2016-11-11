import { Inject, Pipe, PipeTransform } from '@angular/core';
  		  
// this is going to be a pretty ugly implementation of this, but it turns out that parsing markdown is quite difficult.
// at least, if you're me. but hey, it's modular, so we can fix it later.
@Pipe({name: 'markdownCustom'})
export class MarkdownCustomPipe implements PipeTransform {
    public transform(markdown: string): string {
        if(!markdown) return '';
      		      
        let output = markdown;

        output = this.replaceLinkSyntax(output);    
        output = this.replaceBold(output);
        output = this.replaceItalics(output);		
        output = this.replaceHeaders(output);		

        return `<div class="markdown">${output}</div>`;		
    }

    private replaceBreaks(markdown: string): string {		
        let paragraphs: string[] = markdown.split('\n\n');		
        let output: string[] = [];		
 
        for(let paragraph of paragraphs) {		
            output.push();		
        }

        return output.join();		
    }		
 
    private replaceLinkSyntax(markdown: string): string {		
        return markdown.replace(/\[([^\]]+)\]\((\S+)\)/g, function(match, group1, group2) {		
            return `<a rel="noopener noreferrer" target="_blank" href="${group2}">${group1}</a>`;		
        });		
    }		

    private replaceBold(markdown: string): string {		
        return markdown.replace(/\*([^*]+)\*/g, function(match, group1) {		
            return `<strong>${group1}</strong>`;		
        });		
    }		
 	
    private replaceItalics(markdown: string): string {		
        return markdown.replace(/_([^_]+)_/g, function(match, group1) {		
            return `<em>${group1}</em>`;		
        });		
    }		
 	
    private replaceHeaders(markdown: string): string {		
        return markdown.replace(/(#{1,6})(\s\S+)$/gm, function(match, headerStrengthGroup, textGroup) {		
            return `<h${headerStrengthGroup.length}>${textGroup}</h${headerStrengthGroup.length}>`;		
        });		
    }		
}