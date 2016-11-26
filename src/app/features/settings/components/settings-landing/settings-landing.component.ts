import { Component } from '@angular/core';
import { SettingsService } from '../../../../core/services/settings-service/settings.service';

@Component({
    selector: 'lal-settings',
    templateUrl: 'settings-landing.component.html'
})
export class SettingsLandingComponent {
    public isEnabledNotifications: boolean;
    constructor(private settingsService: SettingsService) { }

    updateSettings() {
        this.settingsService.save();
    }
}