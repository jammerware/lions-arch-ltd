import { fakeAsync, tick } from '@angular/core/testing';
import { Http } from '@angular/http';

import { FakeHttpService } from '../../../test/fake-http.service';
import { Gw2ApiDailiesService } from './gw2api-dailies.service';
import { DailyContentRequirement } from './models/daily-content-requirement';
import { DailyGroup } from './models/daily-group';
import { DailyGroupType } from './models/daily-group-type';

function getService(http?: Http): Gw2ApiDailiesService {
    return new Gw2ApiDailiesService(http);
}

describe('The GW2API dailies service', function() {
    it('should adapt a json string representing an array of a single daily to a class as expected when adaptDaily is called', function() {
        // arrange
        let json = JSON.parse(`[{ "id": 1234, "level": {"min": 1, "max": 80 }, "required_access": ["GuildWars2","HeartOfThorns"] }]`);
        let service = getService();

        // act
        let result = service.parseDailies(json);

        // assert
        expect(result.length).toBe(1);
        expect(result[0].achievementId).toBe(1234);
        expect(result[0].level.min).toBe(1);
        expect(result[0].level.max).toBe(80);
        expect(result[0].contentRequirement).toContain(DailyContentRequirement.GuildWars2);
        expect(result[0].contentRequirement).toContain(DailyContentRequirement.HeartOfThorns);
    });

    it('should return a DailyGroup with a DailyGroupType corresponding to the passed string when adaptDailyGroup is called', function() {
        // arrange
        let json = JSON.parse(`{ "wvw": [{ "id": 1234, "level": { "min": 1, "max": 80 }, "required_access": ["GuildWars2"] }] }`);
        let service = getService();

        // act
        let result = service.parseDailyGroup('wvw', json['wvw']);

        // assert
        expect(result.type).toBe(DailyGroupType.wvw);
    });

    it('should return null when adaptDailyGroup is called with a string that can\'t be found in the DailyGroupType enum', function() {
        // arrange
        let json = JSON.parse(`{ "wvw": [{ "id": 1234, "level": { "min": 1, "max": 80 }, "required_access": ["GuildWars2"] }] }`);
        let service = getService();

        // act
        let result = service.parseDailyGroup('blonk', json);

        // assert
        expect(result).toBeNull();
    });

    it('shouldn\'t return a daily group that has no dailies in it', function() {
        // arrange
        let json = JSON.parse(`{ "special": { } }`);
        let service = getService();

        // act
        let result = service.parseDailyGroup('special', json);

        // assert
        expect(result).toBeNull();
    });

    it('should sortakinda integrate with actual data that I copy-pasted from a real call, because I\'m pretty sure that\'s how you write tests? :P', fakeAsync(() => {
        // arrange
        let fakeBody = `
            {"pve":[{"id":1984,"level":{"min":1,"max":80},"required_access":["GuildWars2","HeartOfThorns"]},{"id":1839,"level":{"min":11,"max":79},"required_access":["GuildWars2","HeartOfThorns"]},{"id":1937,"level":{"min":80,"max":80},"required_access":["GuildWars2","HeartOfThorns"]},{"id":1963,"level":{"min":11,"max":79},"required_access":["GuildWars2","HeartOfThorns"]},{"id":1963,"level":{"min":80,"max":80},"required_access":["GuildWars2"]},{"id":2968,"level":{"min":80,"max":80},"required_access":["HeartOfThorns"]},{"id":2893,"level":{"min":31,"max":39},"required_access":["GuildWars2","HeartOfThorns"]},{"id":2914,"level":{"min":40,"max":75},"required_access":["GuildWars2","HeartOfThorns"]},{"id":2931,"level":{"min":76,"max":80},"required_access":["GuildWars2","HeartOfThorns"]}],"pvp":[{"id":1857,"level":{"min":1,"max":80},"required_access":["GuildWars2","HeartOfThorns"]},{"id":2816,"level":{"min":11,"max":80},"required_access":["GuildWars2","HeartOfThorns"]},{"id":2103,"level":{"min":11,"max":80},"required_access":["GuildWars2","HeartOfThorns"]},{"id":2640,"level":{"min":31,"max":80},"required_access":["GuildWars2","HeartOfThorns"]}],"wvw":[{"id":1848,"level":{"min":1,"max":80},"required_access":["GuildWars2","HeartOfThorns"]},{"id":437,"level":{"min":11,"max":80},"required_access":["GuildWars2","HeartOfThorns"]},{"id":1845,"level":{"min":11,"max":80},"required_access":["GuildWars2","HeartOfThorns"]},{"id":1843,"level":{"min":31,"max":80},"required_access":["GuildWars2","HeartOfThorns"]}],"special":[]}
        `.trim();

        let fakeHttp: Http = FakeHttpService.thatRespondsWith(fakeBody);
        let service = new Gw2ApiDailiesService(fakeHttp);

        // act
        let dailies: DailyGroup[];
        service.getDailies().subscribe(r => dailies = r);
        tick();

        // assert
        expect(dailies.length).toBe(3);
        expect(dailies[0].type).toBe(DailyGroupType.pve);
    }));
});