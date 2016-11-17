import { Directive, ElementRef, Input, Renderer } from '@angular/core';
import { ClipboardService } from '../../core/services/clipboard.service';

@Directive({ selector: 'lal-clipboard-trigger' })
export class ClipboardTriggerDirective {
    @Input() private clipboardText: string;

    constructor(el: ElementRef, renderer: Renderer) {
        renderer.setElementClass(el, ClipboardService.ClipboardTriggerClass, true);
        renderer.setElementAttribute(el, 'attr.data-clipboard-text', this.clipboardText);
    }
}