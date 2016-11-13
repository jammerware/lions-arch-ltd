import { Event } from '../../../shared/models/event';
import { EventsService } from './events.service';
import { NowService } from '../now.service';
import { Timespan } from '../../../timespan/timespan';
import { TimespanService } from '../../../timespan/timespan.service';

function getTestEvent(eventOffsetFromUtcMidnight?: number): Event {
    return getTestEventWithOffsets([Timespan.fromMilliseconds(eventOffsetFromUtcMidnight || 0)]);
}

function getTestEventWithOffsets(offsets: Timespan[]): Event {
    return {
        id: '77621b7c-e9f6-47b3-94a3-dbba0ed5d536',
        name: 'Test event!',
        zone: 'Donkland',
        description: 'The testiest of events',
        key: 'te',
        primaryWaypointId: '',
        waypoints: [],
        occurrenceOffsets: offsets,
        goalContributions: []
    }
}

describe('Events service', () => {
    it('should indicate that the offset of the next event is 0 when the event has a 0 offset from UTC midnight and now is UTC midnight', function() {
        // arrange
        let event: Event = getTestEvent();

        let fakeNow = new Date(2016, 11, 11);
        let fakeNowService: NowService = {
            get(): Date {
                return fakeNow;
            },

            getUtcOffset(): number {
                return 0;
            }
        };

        let fakeTimespanService = new TimespanService(fakeNowService);
        let eventsService: EventsService = new EventsService(fakeTimespanService);

        // act
        let result = eventsService.getOffsetOfNextOccurrenceSync(event);

        // assert
        expect(result).toBe(0);
    });

    it('should indicate that the first occurrence of an event is 0ms from now when the event has 0 offset from UTC midnight and now is UTC midnight', () => {
        // arrange
        let event: Event = getTestEvent();

        let fakeNow = new Date(2016, 11, 11);
        let fakeNowService: NowService = {
            get(): Date {
                return fakeNow;
            },

            getUtcOffset(): number {
                return 0;
            }
        };

        let fakeTimespanService = new TimespanService(fakeNowService);
        let eventsService: EventsService = new EventsService(fakeTimespanService);

        // act
        let result = eventsService.getMsTilNextOccurrenceOfSync(event);

        // assert
        expect(result).toBe(0);
    });

    it('should indicate that the offset of the next event is 2.4e+6 ms (40 minutes) when the event has a 2.4e+6 offset and now is UTC midnight', function() {
        // arrange
        let event = getTestEvent(2.4e6);

        let fakeNow = new Date(2016, 11, 11);
        let fakeNowService: NowService = {
            get(): Date {
                return fakeNow;
            },

            getUtcOffset(): number {
                return 0;
            }
        };

        let fakeTimespanService = new TimespanService(fakeNowService);
        let eventsService = new EventsService(fakeTimespanService);

        // act
        let result = eventsService.getOffsetOfNextOccurrenceSync(event);

        // assert
        expect(result).toBe(2.4e6);
    });

    it('should indicate that the next occurrence of an event is 2.4e+6 ms (40 minutes) when the event has a 2.4e+6 offset from UTC midnight and now is UTC midnight', () => {
        // arrange
        let event: Event = getTestEvent(2.4e6);

        let fakeNow = new Date(2016, 11, 11);
        let fakeNowService: NowService = {
            get(): Date {
                return fakeNow;
            },

            getUtcOffset(): number {
                return 0;
            }
        };

        let fakeTimespanService = new TimespanService(fakeNowService);
        let eventsService: EventsService = new EventsService(fakeTimespanService);

        // act
        let result = eventsService.getOffsetOfNextOccurrenceSync(event);

        // assert
        expect(result).toBe(2.4e6);
    });

    it('should indicate that the next occurrence of an event has offset 2.4e6 when the event has a 2.4e+6 offset from UTC midnight and now is UTC 00:42', () => {
        // arrange
        let event = getTestEvent(2.4e6);

        let fakeNow = new Date(2016, 11, 11, 0, 42);
        let fakeNowService: NowService = {
            get(): Date {
                return fakeNow;
            },

            getUtcOffset(): number {
                return 0;
            }
        };

        let fakeTimespanService = new TimespanService(fakeNowService);
        let eventsService: EventsService = new EventsService(fakeTimespanService);

        // act
        let result = eventsService.getOffsetOfNextOccurrenceSync(event);

        // assert
        expect(result).toBe(2.4e6);
  });

  it('should indicate that the next occurrence of an event is 1.2e5 ms ago when the event has a 2.4e+6 offset from UTC midnight and now is UTC 00:42', () => {
        // arrange
        let event = getTestEvent(2.4e6);

        let fakeNow = new Date(2016, 11, 11, 0, 42);
        let fakeNowService: NowService = {
            get(): Date {
                return fakeNow;
            },

            getUtcOffset(): number {
                return 0;
            }
        };

        let fakeTimespanService = new TimespanService(fakeNowService);
        let eventsService: EventsService = new EventsService(fakeTimespanService);

        // act
        let result = eventsService.getMsTilNextOccurrenceOfSync(event);

        // assert
        expect(result).toBe(-1.2e5);
  });

  it('should calculate that the next occurrence of an event that happens every hour on the x:40 is at 1:40pm when now is 1:05pm', function() {
      // arrange
      let event = getTestEventWithOffsets([
        Timespan.fromMinutes(40),
        Timespan.fromHours(1.6667),
        Timespan.fromHours(2.6667),
        Timespan.fromHours(3.6667),
        Timespan.fromHours(4.6667),
        Timespan.fromHours(5.667),
        Timespan.fromHours(6.667),
        Timespan.fromHours(7.667),
        Timespan.fromHours(8.667),
        Timespan.fromHours(9.667),
        Timespan.fromHours(10.667),
        Timespan.fromHours(11.667),
        Timespan.fromHours(12.667),
        Timespan.fromHours(13.667),
        Timespan.fromHours(14.667),
        Timespan.fromHours(15.667),
        Timespan.fromHours(16.667),
        Timespan.fromHours(17.667),
        Timespan.fromHours(18.667),
        Timespan.fromHours(19.667),
        Timespan.fromHours(20.667),
        Timespan.fromHours(21.667),
        Timespan.fromHours(22.667),
        Timespan.fromHours(23.667)
      ]);

      let fakeNow = new Date(2016, 11, 11, 13, 40);
      let fakeNowService: NowService = {
        get(): Date {
            return fakeNow;
        },

        getUtcOffset(): number {
            return 0;
        }
      };

      let fakeTimespanService = new TimespanService(fakeNowService);
      let eventsService: EventsService = new EventsService(fakeTimespanService);

      // act
      let result = eventsService.getMsTilNextOccurrenceOfSync(event);

      // assert
      expect(result).toBe(Timespan.fromHours(14).totalMilliseconds - Timespan.fromMinutes(20).totalMilliseconds);
  });
});