import { Injectable } from '@angular/core';
import { PushNotificationsService } from 'angular2-notifications';
import 'rxjs/Observable';

import { ErrorService } from './error.service';

@Injectable()
export class NotificationsService {
    constructor(
        private errorService: ErrorService,
        private pushNotificationsService: PushNotificationsService
    ) { }

    public requestPermission(forceRequest?: boolean): void {
        if (this.pushNotificationsService.permission === "default" || forceRequest) {
            this.pushNotificationsService.requestPermission();
        }
    }

    public say(title: string, message: string, iconUrl: string, callback: () => void = null): void {
        this.requestPermission();
        console.log('saying for', title);
        this.pushNotificationsService.create(title, {
            body: message,
            icon: iconUrl
        }).subscribe(
            (notificationEvent) => {
                if (notificationEvent.event.type === "click" && callback) {
                    callback();
                }
            },
            (notificationError: any) => { this.errorService.logError(notificationError);  }
        );
    }
}