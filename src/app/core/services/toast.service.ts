import { Injectable, Inject } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { ILOCALIZATIONSERVICE, ILocalizationService } from './localization/ilocalization.service';

@Injectable()
export class ToastService {
    constructor(
        @Inject(ILOCALIZATIONSERVICE) private localizationService: ILocalizationService,
        private snackBar: MdSnackBar
    ) { }

    show(message: string, actionText = this.localizationService.accept): void {
        let config = {
            announcementMessage: message,
            duration: 5000
        };
        this.snackBar.open(message, actionText, config);
    }
}