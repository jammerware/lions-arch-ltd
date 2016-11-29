import { Injectable } from '@angular/core';
import { BrowserStorageService } from '../browser-storage.service';

@Injectable()
export class SettingsService {
    constructor(private browserStorageService: BrowserStorageService) { }

    get isEnabledNotifications(): boolean {
        return this.browserStorageService.getItem('isEnabledNotifications') === 'true';
    }

    set isEnabledNotifications(value: boolean) {
        this.browserStorageService.setItem('isEnabledNotifications', value.toString());
    }
}