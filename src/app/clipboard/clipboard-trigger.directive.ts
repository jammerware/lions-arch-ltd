import { Directive, ElementRef, Input, OnInit, Renderer } from '@angular/core';
import { ClipboardService } from './clipboard.service';
import { ErrorService } from '../core/services/error.service';
import { ToastService } from '../core/services/toast.service';

@Directive({
    providers: [ClipboardService],
    selector: '[lal-clipboard-trigger]'
})
export class ClipboardTriggerDirective implements OnInit {
    @Input('lal-clipboard-trigger') clipboardText: string;
    clipboardService: ClipboardService;

    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer,
        private errorService: ErrorService,
        private toastService: ToastService) { }

    ngOnInit(): void {
        this.renderer.setElementClass(this.elementRef.nativeElement, ClipboardService.ClipboardTriggerClass, true);
        this.renderer.setElementAttribute(this.elementRef.nativeElement, 'type', 'button');
        this.renderer.setElementAttribute(this.elementRef.nativeElement, 'data-clipboard-text', this.clipboardText);
        console.log('initting for ', this.clipboardText);

        this.clipboardService = new ClipboardService();
        this.clipboardService.init(
            (successEvent) => {
                this.toastService.show(`Copied "${this.clipboardText}" to your clipboard.`, `Got it`);
            },
            (errorEvent) => {
                this.errorService.logError(errorEvent);
            }
        );
    }
}