import { Component } from '@angular/core';
import { SettingsService } from '../../../../core/services/settings-service/settings.service';

@Component({
  templateUrl: './settings-landing.component.html'
})
export class SettingsLandingComponent {
  constructor(private settingsService: SettingsService) { }
}