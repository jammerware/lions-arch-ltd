import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Achievement } from './models/achievement';

const API_ENDPOINT: string = 'https://api.guildwars2.com/v2/achievements/';

@Injectable()
export class Gw2ApiAchievementsService {
    constructor(private http: Http) { }

    getAchievement(id: number): Observable<Achievement> {
        return this.http
            .get(API_ENDPOINT + `/${id}`)
            .map((r) => {
                if(r.ok) {
                    return this.parseAchievement(r.json());
                }

                return null;
            });
    }

    parseAchievement(json: any): Achievement {
        if(json.text == "no such id") return null;

        return {
            id: json.id,
            name: json.name,
            description: json.description,
            requirement: json.requirement
        };
    }
}