import { Timespan } from './timespan';

describe('The timespan class', function() {
    it('should create a timespan with 500 ms when constructed with 500ms as the argument to fromMilliseconds', function() {
        // arrange / act
        let timespan = Timespan.fromMilliseconds(500);

        // assert
        expect(timespan.milliseconds).toBe(500);
    });

    it('should create a timespan with 1500 total ms when constructed with 1500 ms as the argument to fromMilliseconds', function() {
        // arrange / act
        let timespan = Timespan.fromMilliseconds(1500);

        // assert
        expect(timespan.totalMilliseconds).toBe(1500);
    });

    it('should create a timespan with 500 ms when constructed with 1500 as the argument to fromMilliseconds', function() {
        // arrange / act
        let timespan = Timespan.fromMilliseconds(1500);

        // assert
        expect(timespan.milliseconds).toBe(500);
    });

    it('should create a timespan with 500ms when constructed with 20500 as the argument to fromMilliseconds', function() {
        // arrange/act
        let timespan = Timespan.fromMilliseconds(20500);

        // assert
        expect(timespan.milliseconds).toBe(500);
    });

    it('should create a timespan with 1 second when constructed with 1500 as the argument to fromMilliseconds', function() {
        // arrange/act
        let timespan = Timespan.fromMilliseconds(1500);

        // assert
        expect(timespan.seconds).toBe(1);
    });

    it('should create a timespan with 1 minute when constructed with 60001 as the argument to fromMilliseconds', function() {
        // arrange/act
        let timespan = Timespan.fromMilliseconds(60001);

        // assert
        expect(timespan.minutes).toBe(1);
    });

    it('should create a timespan with 1 hour when constructed with 3.6e6+1 as the argument to fromMilliseconds', function() {
        // arrange/act
        let timespan = Timespan.fromMilliseconds(3.6e6 + 1);

        // assert
        expect(timespan.hours).toBe(1);
    });

    it('should create a timespan with 1 day when constructed with 8.64e+7 as the argument to fromMilliseconds', function() {
        // arrange/act
        let timespan = Timespan.fromMilliseconds(8.64e7);

        // assert
        expect(timespan.days).toBe(1);
    });

    it('should create a timespan with 1 week when constructed with 6.048e8 as the argument to fromMilliseconds', function() {
        // arrange/act
        let timespan = Timespan.fromMilliseconds(6.048e8);

        // assert
        expect(timespan.weeks).toBe(1);
    });

    it('should create a timespan with 1 year when constructed with 3.154e+10 as the argument to fromMilliseconds', function() {
        // arrange/act
        let timespan = Timespan.fromMilliseconds(3.154e10);

        // assert
        expect(timespan.years).toBe(1);
    });

    it('should create a timespan with 1 decade when constructed with 3.154e11 as the argument to fromMilliseconds', function() {
        // arrange/act
        let timespan = Timespan.fromMilliseconds(3.154e11);

        // assert
        expect(timespan.decades).toBe(1);
    });

    it('should create a timespan with 1 century when constructed with 3.154e12 as the argument to fromMilliseconds', function() {
        // arrange/act
        let timespan = Timespan.fromMilliseconds(3.154e12);

        // assert
        expect(timespan.centuries).toBe(1);
    });

    it('should create a timespan with 1 millenium when constructed with 3.154e13 as the argument to fromMilliseconds', function() {
        // arrange/act
        let timespan = Timespan.fromMilliseconds(3.154e13);

        // assert
        expect(timespan.millennia).toBe(1);
    });

    it('should create a timespan with expected total milliseconds equal to 13 hours, 40 minutes when "from" is called with 13 and 40', function() {
        // arrange/act
        let timespan = Timespan.from(13, 40);

        // assert
        expect(timespan.totalMilliseconds).toBe(49200000);
    });
});