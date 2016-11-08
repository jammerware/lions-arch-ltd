import { Injectable } from '@angular/core';
import Clipboard = require('clipboard/dist/clipboard.js');

@Injectable()
export class ClipboardService {
    init(
        onSuccess?: (clipboardEvent: any) => void, 
        onFailure?: (clipboardEvent: any) => void
    ) {
        let clipboard = new Clipboard('.clipboard-trigger');

        clipboard.on('success', onSuccess);
        clipboard.on('error', onFailure);
    }
}