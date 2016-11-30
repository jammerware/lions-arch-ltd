import { NgModule } from '@angular/core';
import { ClipboardTriggerDirective } from './clipboard-trigger.directive';

@NgModule({
    declarations: [ClipboardTriggerDirective],
    exports: [ClipboardTriggerDirective]
})
export class ClipboardModule { }