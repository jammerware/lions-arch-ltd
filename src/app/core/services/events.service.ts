import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Event } from '../../shared/models/event';
import { EVENTS } from '../mock-data/mock-events';
import { TimespanService } from '../../timespan/timespan.service';

@Injectable()
export class EventsService {
  constructor(private timespanService: TimespanService) { }

  getEvent(id: string): Observable<Event> {
    return Observable.of(EVENTS.find(e => e.id == id));
  }

  getEvents(): Observable<Event[]> {
    return Observable.of<Event[]>(EVENTS);
  }

  getMsTilNextOccurrenceOf(event: Event): number {
    let timespanSinceMidnightUtc = this.timespanService.getTimespanSinceMidnightUtc();
    let msSinceMidnightUtc = timespanSinceMidnightUtc.totalMilliseconds;
    let timeOfNextEvent = 0;

    for(let i = event.offsetFromUtcMidnight; timeOfNextEvent < msSinceMidnightUtc; i += event.interval) {
      timeOfNextEvent = i;
    }

    return timeOfNextEvent - msSinceMidnightUtc;
  }
}