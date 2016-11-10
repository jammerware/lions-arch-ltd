import { Injectable } from '@angular/core';
import * as Clipboard from 'clipboard';

@Injectable()
export class ClipboardService {
    init(
        onSuccess?: (clipboardEvent: any) => void, 
        onFailure?: (clipboardEvent: any) => void
    ): void {
        let clipboard = new Clipboard('.clipboard-trigger');

        clipboard.on('success', onSuccess);
        clipboard.on('error', onFailure);
    }
}