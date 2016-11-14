import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Event } from '../../../shared/models/event';
import { MOCK_EVENTS } from '../../mock-data/mock-events';
import { Timespan } from '../../../timespan/timespan';
import { TimespanService } from '../../../timespan/timespan.service';

@Injectable()
export class EventsService {
  constructor(private timespanService: TimespanService) { }

  getEvent(id: string): Observable<Event> {
    return Observable.of(MOCK_EVENTS.find(e => e.id === id));
  }

  getEvents(): Observable<Event[]> {
    return Observable.of(MOCK_EVENTS);
  }

  getOffsetOfNextOccurrenceSync(event: Event): number {
    // TODO: the next event after 15 minutes ago
    let msInADay = Timespan.fromHours(24).totalMilliseconds;
    let nowish = (this.timespanService.getTimespanSinceMidnightUtc().totalMilliseconds - 72000 + msInADay) % msInADay;
    let eventOffsetIndex = 0;
    let eventOffset = event.occurrenceOffsets[eventOffsetIndex];

    while (nowish - eventOffset.totalMilliseconds > 0 && event.occurrenceOffsets[++eventOffsetIndex]) {
      eventOffset = event.occurrenceOffsets[eventOffsetIndex];
    }

    return eventOffset.totalMilliseconds;
  }

  getMsTilNextOccurrenceOfSync(event: Event): number {
    let msSinceMidnightUtc = this.timespanService.getTimespanSinceMidnightUtc().totalMilliseconds;
    let offsetOfNextEvent = this.getOffsetOfNextOccurrenceSync(event);
  
    return offsetOfNextEvent - msSinceMidnightUtc;
  }

  getMsTilNextOccurrenceOf(event: Event): Observable<number> {
    return Observable.of(this.getMsTilNextOccurrenceOfSync(event));
  }
}