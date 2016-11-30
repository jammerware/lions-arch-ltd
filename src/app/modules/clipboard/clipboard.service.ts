import { Injectable } from '@angular/core';
import * as Clipboard from 'clipboard-js';

@Injectable()
export class ClipboardService {
    copy(text: string, successCallback?: () => void, errorCallback?: (error) => void): void {
        Clipboard.copy(text).then(
            successCallback,
            errorCallback
        );
    }
}