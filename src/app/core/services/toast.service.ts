import { Injectable, ViewContainerRef } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Injectable()
export class ToastService {
    constructor(
        private snackBar: MdSnackBar
    ) { }

    show(message: string, viewContainerRef: ViewContainerRef): void {
        let config = new MdSnackBarConfig(viewContainerRef);
        this.snackBar.open(message, null, config);
    }
}