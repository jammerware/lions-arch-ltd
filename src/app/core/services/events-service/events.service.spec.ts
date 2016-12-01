import { Event } from '../../../shared/models/event';
import { EventsService } from './events.service';
import { NowService } from '../now.service';
import { Timespan } from '../../../modules/timespan/timespan';

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
        eventTypeId: '',
        primaryWaypointId: '',
        waypoints: [],
        occurrenceOffsets: offsets || [Timespan.fromMilliseconds(0)],
        goalContributions: []
    };
}

describe('The events service', () => {
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
            },

            getTimespanSinceMidnightUtc(): Timespan {
                return new Timespan();
            }
        };

        let eventsService: EventsService = new EventsService(fakeNowService);

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
            },

            getTimespanSinceMidnightUtc(): Timespan {
                return new Timespan();
            }
        };

        let eventsService: EventsService = new EventsService(fakeNowService);

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
            },

            getTimespanSinceMidnightUtc(): Timespan {
                return new Timespan();
            }
        };

        let eventsService = new EventsService(fakeNowService);

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
            },

            getTimespanSinceMidnightUtc(): Timespan {
                return new Timespan();
            }
        };

        let eventsService: EventsService = new EventsService(fakeNowService);

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
            },

            getTimespanSinceMidnightUtc(): Timespan {
                return Timespan.fromMinutes(42);
            }
        };

        let eventsService: EventsService = new EventsService(fakeNowService);

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
            },

            getTimespanSinceMidnightUtc(): Timespan {
                return Timespan.fromMinutes(42);
            }
        };

        let eventsService: EventsService = new EventsService(fakeNowService);

        // act
        let result = eventsService.getMsTilNextOccurrenceOfSync(event);

        // assert
        expect(result).toBe(-1.2e5);
    });

    it('should calculate that the next occurrence of an event that happens every hour on the x:40 is at 1:40pm when now is 1:05pm', function() {
        // arrange
        let event = getTestEventWithOffsets([
            Timespan.fromMinutes(40),
            Timespan.from(1, 40),
            Timespan.from(2, 40),
            Timespan.from(3, 40),
            Timespan.from(4, 40),
            Timespan.from(5, 40),
            Timespan.from(6, 40),
            Timespan.from(7, 40),
            Timespan.from(8, 40),
            Timespan.from(9, 40),
            Timespan.from(10, 40),
            Timespan.from(11, 40),
            Timespan.from(12, 40),
            Timespan.from(13, 40),
        ]);

        let fakeNow = new Date(2016, 11, 11, 13, 5);
        let fakeNowService: NowService = {
            get(): Date {
                return fakeNow;
            },

            getUtcOffset(): number {
                return 0;
            },

            getTimespanSinceMidnightUtc(): Timespan {
                return Timespan.from(13, 5);
            }
        };

        let eventsService: EventsService = new EventsService(fakeNowService);

        // act
        let result = eventsService.getOffsetOfNextOccurrenceSync(event);

        // assert
        expect(result).toBe(Timespan.from(13, 40).totalMilliseconds);
    });
});