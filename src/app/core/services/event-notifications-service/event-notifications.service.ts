import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

import { Event } from '../../../shared/models/event';
import { AssetService } from '../../services/asset.service';
import { EventsService } from '../../services/events-service/events.service';
import { NotificationsService } from '../notifications.service';
import { SlugService } from '../slug-service/slug.service';

@Injectable()
export class EventNotificationsService {
    private cache: { [eventId: string]: number; } =  { };
    constructor(
        private assetsService: AssetService,
        private eventsService: EventsService,
        private notificationsService: NotificationsService,
        private router: Router,
        private slugService: SlugService) { }

    addToCache(eventId: string, offset: number) {
        this.cache[eventId] = offset;
    }

    getCacheContains(eventId: string, offset: number) {
        return this.cache[eventId] === offset;
    }

    getUpcomingEvents(eventWindowDuration: number, pollingInterval: number): Observable<void> {
        // ask for notification permission
        this.notificationsService.requestPermission();

        // build subscription and return
        return Observable.combineLatest(
            Observable.interval(pollingInterval),
            this.eventsService.getEvents(),
            (tick: number, events: Event[]) => {
                for (let event of events) {
                    if (this.eventsService.getMsTilNextOccurrenceOfSync(event) < eventWindowDuration) {
                        let offsetOfNextOccurrence = this.eventsService.getOffsetOfNextOccurrenceSync(event);

                        if (this.notificationsService.getHasPermission() && !this.getCacheContains(event.id, offsetOfNextOccurrence)) {
                            this.notificationsService.say(
                                `${event.name}`,
                                `It's starting soon in ${event.zone}!`,
                                this.assetsService.getUrl('images/icons/event-notification-icons/' + event.key + '.jpg'),
                                () => {
                                this.router.navigate(['/event', this.slugService.getSlug(event.name), event.id ]);
                                }
                            );

                            this.addToCache(event.id, offsetOfNextOccurrence);
                        }
                    }
                }
            }
        );
    }
}