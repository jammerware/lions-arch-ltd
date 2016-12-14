import { Directive, HostListener, Input } from '@angular/core';
import { ClipboardService } from './clipboard.service';
import { ErrorService } from '../../core/services/error.service';
import { ToastService } from '../../core/services/toast.service';

@Directive({
  providers: [ClipboardService],
  selector: '[lal-clipboard-trigger]'
})
export class ClipboardTriggerDirective {
  @Input('lal-clipboard-trigger') clipboardText: string;
  constructor(
    private clipboardService: ClipboardService,
    private errorService: ErrorService,
    private toastService: ToastService) { }

  @HostListener('click')
  onClick(): void {
    this.clipboardService.copy(
      this.clipboardText,
      () => { this.toastService.show(`Copied "${this.clipboardText}" to your clipboard.`); },
      (error) => this.errorService.logError(error)
    );
  }
}