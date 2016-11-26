import { Injectable, ViewContainerRef } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Injectable()
export class ToastService {
    constructor(
        private snackBar: MdSnackBar
    ) { }

    show(message: string, actionText = "Got it", viewContainerRef: ViewContainerRef = null): void {
        let config = new MdSnackBarConfig();
        this.snackBar.open(message, actionText, config);
    }
}