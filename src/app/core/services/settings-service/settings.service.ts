import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
    public isEnabledNotifications: boolean;

    init(): void {
        this.isEnabledNotifications = (localStorage.getItem('isEnabledNotifications') === 'true');
    }

    save(): void {
        localStorage.setItem('isEnabledNotifications', this.isEnabledNotifications.toString());
    }
}