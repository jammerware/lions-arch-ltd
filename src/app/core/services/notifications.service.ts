import { Injectable } from '@angular/core';
import 'rxjs/Observable';

import { AssetService } from './asset.service';
import { ErrorService } from './error.service';
import { LoggingService } from './logging.service';
import { PushNotificationsService } from 'angular2-notifications';
import { SettingsService } from './settings-service/settings.service';
import { Sound, SfxService } from './sfx-service';

@Injectable()
export class NotificationsService {
  constructor(
    private assetService: AssetService,
    private errorService: ErrorService,
    private loggingService: LoggingService,
    private pushNotificationsService: PushNotificationsService,
    private settingsService: SettingsService,
    private sfxService: SfxService
  ) { }

  public getHasPermission(): boolean {
    return this.pushNotificationsService.permission === "granted";
  }

  public requestPermission(forceRequest?: boolean): void {
    if (this.pushNotificationsService.permission === "default" || forceRequest) {
      this.pushNotificationsService.requestPermission();
    }
  }

  public say(title: string, message: string, iconUrl: string, callback: () => void = null): void {
    if (this.getHasPermission() && this.settingsService.isEnabledNotifications) {

      let sound: Sound;
      if (this.settingsService.notificationSoundId) {
        sound = this.sfxService.getSound(this.settingsService.notificationSoundId);
      }

      this.pushNotificationsService
        .create(title, {
          body: message,
          icon: iconUrl
        })
        .subscribe(
        (notificationEvent) => {
          if (notificationEvent.event.type === "click" && callback) {
            callback();
            window.focus();
            notificationEvent.notification.close();
          }
        },
        (notificationError: any) => { this.errorService.logError(notificationError); }
        );
    }
  }
}