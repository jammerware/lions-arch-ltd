import { Injectable } from '@angular/core';
import 'rxjs/Observable';

import { ErrorService } from './error.service';
import { PushNotificationsService } from 'angular2-notifications';
import { SettingsService } from './settings-service/settings.service';

@Injectable()
export class NotificationsService {
  constructor(
    private errorService: ErrorService,
    private pushNotificationsService: PushNotificationsService,
    private settingsService: SettingsService
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