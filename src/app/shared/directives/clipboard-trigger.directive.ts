import { Directive, ElementRef, Input, OnInit, Renderer } from '@angular/core';
import { ClipboardService } from '../../core/services/clipboard.service';

@Directive({ selector: '[lalClipboardTrigger]' })
export class ClipboardTriggerDirective implements OnInit {
    @Input('lalClipboardTrigger') clipboardText: string;

    constructor(private elementRef: ElementRef, private renderer: Renderer) { }

    ngOnInit(): void {
        this.renderer.setElementClass(this.elementRef.nativeElement, ClipboardService.ClipboardTriggerClass, true);
        this.renderer.setElementAttribute(this.elementRef.nativeElement, 'type', 'button');
        this.renderer.setElementAttribute(this.elementRef.nativeElement, 'data-clipboard-text', this.clipboardText);
    }
}