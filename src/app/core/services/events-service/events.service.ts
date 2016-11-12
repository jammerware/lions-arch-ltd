import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Event } from '../../../shared/models/event';
import { EVENTS } from '../../mock-data/mock-events';
import { TimespanService } from '../../../timespan/timespan.service';

@Injectable()
export class EventsService {
  constructor(private timespanService: TimespanService) { }

  getEvent(id: string): Observable<Event> {
    return Observable.of(EVENTS.find(e => e.id === id));
  }

  getEvents(): Observable<Event[]> {
    return Observable.of(EVENTS);
  }

  getMsTilNextOccurrenceOfSync(event: Event): number {
    let timespanSinceMidnightUtc = this.timespanService.getTimespanSinceMidnightUtc();
    let msSinceMidnightUtc = timespanSinceMidnightUtc.totalMilliseconds;
    let timeOfNextEvent = event.offsetFromUtcMidnight;

    // if we're 20 minutes or less into the event's active occurrence, report that it's going on right now
    while(timeOfNextEvent < msSinceMidnightUtc - 72000) {
      console.log(timeOfNextEvent);
      timeOfNextEvent += event.interval;
    }
    
    return timeOfNextEvent - msSinceMidnightUtc;
  }

  getMsTilNextOccurrenceOf(event: Event): Observable<number> {
    return Observable.of(this.getMsTilNextOccurrenceOfSync(event));
  }
}