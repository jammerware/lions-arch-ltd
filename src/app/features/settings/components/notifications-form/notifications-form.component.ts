import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import 'rxjs/add/operator/map';

import { SettingsService } from '../../../../core/services/settings-service/settings.service';
import { Sound, SfxService } from '../../../../core/services/sfx-service';

@Component({
  selector: 'lal-settings-notifications-form',
  styleUrls: ['./notifications-form.component.scss'],
  templateUrl: './notifications-form.component.html'
})
export class NotificationsFormComponent implements OnChanges, OnInit {
  public sounds: Sound[];
  public selectedSound: Sound;

  constructor(
    private settingsService: SettingsService,
    private sfxService: SfxService) { }

  ngOnInit() {
    this.sounds = this.sfxService.getSounds();

    let notificationSoundId = this.settingsService.notificationSoundId;
    if (notificationSoundId) {
      this.selectedSound = this.sfxService.getSound(notificationSoundId);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  updateSettings(): void {
    if (this.selectedSound) {
      this.settingsService.notificationSoundId = this.selectedSound.id;
    }
  }
}