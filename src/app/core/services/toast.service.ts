import { Injectable, ViewContainerRef } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Injectable()
export class ToastService {
    constructor(
        private snackBar: MdSnackBar
    ) { }

    show(message: string, viewContainerRef: ViewContainerRef = null): void {

        let donkConfig: MdSnackBarConfig = {
            // TODO: when angular material publishes the build that has duration
            // duration: 2000,
            viewContainerRef: viewContainerRef
        };
        
        this.snackBar.open(message, "Got it" , donkConfig);
    }
}