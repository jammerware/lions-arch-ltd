import { Injectable } from '@angular/core';
import * as Clipboard from 'clipboard';

@Injectable()
export class ClipboardService {
    public static ClipboardTriggerClass: string = 'clipboard-trigger';

    init(
        onSuccess?: (clipboardEvent: any) => void,
        onFailure?: (clipboardEvent: any) => void
    ): void {
        let clipboard = new Clipboard(`.${ClipboardService.ClipboardTriggerClass}`);

        clipboard.on('success', onSuccess);
        clipboard.on('error', onFailure);
    }
}