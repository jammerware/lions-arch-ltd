import { Injectable } from '@angular/core';
//import Clipboard from 'clipboard';

@Injectable()
export class ClipboardService {
    init(
        onSuccess?: (clipboardEvent: any) => void, 
        onFailure?: (clipboardEvent: any) => void
    ): void {
        // TODO:
        // WTF.
        //
        // I can't figure out how to import the Clipboard module. Basically, if the value of "module" in tsconfig.json is set to "system",
        // which I thought I was using, Javascript doesn't know what "module" is when the app is bootstrapped on index.html. However, that
        // does allow me to import Clipboard as written above. On the other hand, if I set the "module" tsconfig value to "commonjs", everything works
        // EXCEPT my ability to import clipboard above.
        // TODO: actually learn how anything works.

        // let clipboard = new Clipboard('.clipboard-trigger');

        // clipboard.on('success', onSuccess);
        // clipboard.on('error', onFailure);
    }
}