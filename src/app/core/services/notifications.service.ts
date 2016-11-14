import { Injectable } from '@angular/core';
import { PushNotificationsService } from 'angular2-notifications';
import 'rxjs/observable';

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

    say(message: string): void {
        this.pushNotificationsService.create("Heads up!", {
            body: message,
            renotify: false
        }).subscribe(
            (result) => { console.log('push result', result); },
            (error: any) => { this.errorService.logError(error);  }
        );
    }
}