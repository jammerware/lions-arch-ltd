import { Http } from '@angular/http';
import { fakeAsync, tick } from '@angular/core/testing';

import { FakeHttpService } from '../../../test/fake-http.service';
import { Gw2ApiAchievementsService } from './gw2api-achievements.service';
import { Achievement } from './models/achievement';

function getService(http?: Http): Gw2ApiAchievementsService {
    return new Gw2ApiAchievementsService(http);
}

describe('The GW2API achievements service', function() {
    it('should parse achievement json into an achievement object as expected', function() {
        // arrange
        let json = JSON.parse(`{ 
            "id": 1234,
            "name": "King Donkleflatz's Court Jumping Puzzle",
            "description": "Don't mess with the court.",
            "requirement": "Complete the court jumping puzzle, then donkle some flatz.",
            "icon": "http://i.imgur.com/IppKJ.jpg"
        }`.trim());

        let service = getService();

        // act
        let result = service.parseAchievement(json);

        // assert
        expect(result.id).toBe(1234);
        expect(result.name).toBe("King Donkleflatz's Court Jumping Puzzle");
        expect(result.description).toBe("Don't mess with the court.");
        expect(result.requirement).toBe("Complete the court jumping puzzle, then donkle some flatz.");
        expect(result.iconUrl).toBe("http://i.imgur.com/IppKJ.jpg");
    });

    it('should integrate sortakinda', fakeAsync(() => {
        // arrange
        let fakeBody = ` 
            {"id":1409,"icon":"https://render.guildwars2.com/file/A047720652E1F4F1F678F06E0AD343BC0A17D70A/740012.png","name":"Harsh Detox","description":"","requirement":"Kill members of the Toxic Alliance in Lion's Arch.","locked_text":"","type":"Default","flags":[],"tiers":[{"count":10,"points":1}]}
        `.trim();
        let fakeHttp = FakeHttpService.thatRespondsWith(fakeBody);
        let service = getService(fakeHttp);
        let result: Achievement;

        // act
        service.getAchievement(1409).subscribe(a => result = a);
        tick();

        // assert
        expect(result.id).toBe(1409);
    }));
});