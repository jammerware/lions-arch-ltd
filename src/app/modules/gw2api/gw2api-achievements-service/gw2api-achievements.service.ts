import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Achievement } from './models/achievement';

const API_ENDPOINT = 'https://api.guildwars2.com/v2/achievements';

@Injectable()
export class Gw2ApiAchievementsService {
    constructor(private http: Http) { }

    getAchievement(id: number): Observable<Achievement> {
        return this.http
            .get(API_ENDPOINT + `/${id}`)
            .map((r) => {
                if (r.ok) {
                    return this.parseAchievement(r.json());
                }

                return null;
            });
    }

    getAchievements(ids: number[]): Observable<Achievement[]> {
        return this.http
            .get(API_ENDPOINT + `?ids=${ids.toString()}`)
            .map((r) => {
                let achievements: Achievement[] = [];

                if (r.ok) {
                    for (let achievementJson of r.json()) {
                        achievements.push(this.parseAchievement(achievementJson));
                    }
                }

                return achievements;
            });
    }

    parseAchievement(json: any): Achievement {
        if (json.text && json.text === "no such id") { return null; }

        return {
            id: json.id,
            name: json.name,
            description: json.description,
            requirement: json.requirement,
            iconUrl: json.icon
        };
    }
}