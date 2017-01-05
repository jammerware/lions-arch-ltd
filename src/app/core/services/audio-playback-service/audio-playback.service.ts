import { Injectable } from '@angular/core';
import { SettingsService } from '../settings-service';

@Injectable()
export class AudioPlaybackService {
  constructor(private settingsService: SettingsService) { }

  play(url: string): void {
    let audio = new Audio(url);
    audio.volume = this.settingsService.notificationVolume;
    audio.play();
  }
}