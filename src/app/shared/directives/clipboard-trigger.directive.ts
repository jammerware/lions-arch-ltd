import { Directive, ElementRef, Input, Renderer } from '@angular/core';
import { ClipboardService } from '../../core/services/clipboard.service';

@Directive({ selector: '[lalClipboardTrigger]' })
export class ClipboardTriggerDirective {
    @Input('lalClipboardTrigger') clipboardText: string;
    @Input() donk: string;

    constructor(el: ElementRef, renderer: Renderer) {
        renderer.setElementClass(el.nativeElement, ClipboardService.ClipboardTriggerClass, true);
        renderer.setElementAttribute(el.nativeElement, 'type', 'button');
        renderer.setElementAttribute(el.nativeElement, 'data-clipboard-text', "the say anything game");

        console.log('clipboardText is ', this.clipboardText);
        console.log('donk is', this.donk);
    }
}