import { Event } from '../../../shared/models/event';
import { EventsService } from './events.service';
import { NowService } from '../now.service';
import { Timespan } from '../../../timespan/timespan';
import { TimespanService } from '../../../timespan/timespan.service';

function getTestEvent(): Event {
    return {
        id: '77621b7c-e9f6-47b3-94a3-dbba0ed5d536',
        name: 'Test event!',
        zone: 'Donkland',
        description: 'The testiest of events',
        key: 'te',
        primaryWaypointId: '',
        waypoints: [],
        offsetFromUtcMidnight: 0,
        interval: 1000*60*60,
        goalContributions: []
    };
}

describe('Events service', () => {
    beforeEach(() => {
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

    it('should indicate that the first occurrence of an event is 2.4e+6 ms (40 minutes) from now when the event has a 2.4e+6 offset from UTC midnight and now is UTC midnight', () => {
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
        expect(result).toBe(2.4e6);
    });

    it('should indicate that the next occurrence of an event is -120000 ms (-2 minutes) from now when the event has a 2.4e+6 offset from UTC midnight and now is UTC 00:42', () => {
        // arrange
        let event: Event = {
            id: '77621b7c-e9f6-47b3-94a3-dbba0ed5d536',
            name: 'Test event!',
            zone: 'Donkland',
            description: 'The testiest of events',
            key: 'te',
            primaryWaypointId: '',
            waypoints: [],
            offsetFromUtcMidnight: 2.4e+6,
            interval: 1000*60*60,
            goalContributions: []
        };

        let fakeNow = new Date(2016, 11, 11, 4, 42);
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
});