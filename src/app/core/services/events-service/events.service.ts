import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

import { Event } from '../../../shared/models/event';
import { MOCK_EVENTS } from '../../mock-data/mock-events';
import { NowService } from '../now.service';
import { Timespan } from '../../../modules/timespan/timespan';

@Injectable()
export class EventsService {
  constructor(private nowService: NowService) { }

  getEvent(id: string): Observable<Event> {
    return Observable.of(MOCK_EVENTS.find(e => e.id === id));
  }

  getEvents(): Observable<Event[]> {
    return Observable.of(MOCK_EVENTS);
  }

  getOffsetOfNextOccurrenceSync(event: Event, includePastEventsOffset = 0): number {
    let msInADay = Timespan.fromHours(24).totalMilliseconds;
    let nowish = (this.nowService.getTimespanSinceMidnightUtc().totalMilliseconds - includePastEventsOffset + msInADay) % msInADay;
    let eventOffsetIndex = 0;
    let eventOffset = event.occurrenceOffsets[eventOffsetIndex];

    while (nowish - eventOffset.totalMilliseconds > 0 && event.occurrenceOffsets[++eventOffsetIndex]) {
      eventOffset = event.occurrenceOffsets[eventOffsetIndex];
    }

    return eventOffset.totalMilliseconds;
  }

  getMsTilNextOccurrenceOfSync(event: Event, includePastEventsOffset = 0): number {
    let msSinceMidnightUtc = this.nowService.getTimespanSinceMidnightUtc().totalMilliseconds;
    let offsetOfNextEvent = this.getOffsetOfNextOccurrenceSync(event);

    return offsetOfNextEvent - msSinceMidnightUtc;
  }

  getMsTilNextOccurrenceOf(event: Event, includePastEventsOffset = 0): Observable<number> {
    // this is the only way I know of right now to emit the value right now and then again every 20 seconds
    let timeTilOccurrenceFromNow = Observable.of(this.getMsTilNextOccurrenceOfSync(event));
    let timeTilOccurrenceFromEveryInterval = Observable
      .interval(20000)
      .map(() => { return this.getMsTilNextOccurrenceOfSync(event); });

    return timeTilOccurrenceFromNow.concat(timeTilOccurrenceFromEveryInterval);
  }
}