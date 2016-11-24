import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { EventsService } from '../../services/events-service/events.service';
import { Event } from '../../../shared/models/event';

@Injectable()
export class EventNotificationsService {
    private cache: { [eventId: string]: number; } =  { };
    constructor(private eventsService: EventsService) { }

    add(eventId: string, offset: number) {
        this.cache[eventId] = offset;
    }

    getHasNotifiedFor(eventId: string, offset: number): boolean {
        if (this.cache[eventId] === offset) {
            console.log('cache hit, already notified');
        } else { console.log('cache miss, notification going'); }
        return this.cache[eventId] === offset;
    }

    logNotifyFor(eventId: string, offset: number): void {
        this.cache[eventId] = offset;
    }

    getUpcomingEvents(eventWindowDuration: number, pollingInterval: number): Observable<Event[]> {
        return Observable
            .interval(pollingInterval)
            .flatMap(() => {
                return this.eventsService
                    .getEvents()
                    .map(events => {
                        let upcomingEvents: Event[] = [];

                        for (let event of events) {
                            if (this.eventsService.getMsTilNextOccurrenceOfSync(event) < eventWindowDuration) {
                                let offsetOfNextOccurrence = this.eventsService.getOffsetOfNextOccurrenceSync(event);

                                if (!this.getHasNotifiedFor(event.id, offsetOfNextOccurrence)) {
                                    this.logNotifyFor(event.id, offsetOfNextOccurrence);
                                    upcomingEvents.push(event);
                                }
                            }
                        }

                        return upcomingEvents;
                    });
            });
    }
}