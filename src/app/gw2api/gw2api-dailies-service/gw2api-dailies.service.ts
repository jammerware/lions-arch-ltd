import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concat';

import { Daily } from './models/daily';
import { DailyContentRequirement } from './models/daily-content-requirement';
import { DailyGroup } from './models/daily-group';
import { DailyGroupType } from './models/daily-group-type';

@Injectable()
export class Gw2ApiDailiesService {
    public static API_ENDPOINT = 'https://api.guildwars2.com/v2/achievements/daily';
    // i'm sure this is in no way a terrible idea
    public static API_ENDPOINT_FRACTALS = 'https://api.guildwars2.com/v2/achievements/categories/88';
    constructor(private http: Http) { }

    public getDailies(): Observable<DailyGroup[]> {
        let standardDailies = this
            .http.get(Gw2ApiDailiesService.API_ENDPOINT)
            .map(r => this.parseDailiesData(r));

        let fractalDailies = this
            .http.get(Gw2ApiDailiesService.API_ENDPOINT_FRACTALS)
            .map(r => this.parseFractalDailiesData(r));

        return standardDailies.concat(fractalDailies);
    }

    parseDailiesData(response: Response): DailyGroup[] {
        let dailyGroups: DailyGroup[] = [];

        if (response.ok) {
            let json: any = response.json();

            for (let dailyGroupJson in json) {
                // http://stackoverflow.com/questions/1963102/what-does-the-jslint-error-body-of-a-for-in-should-be-wrapped-in-an-if-statemen
                if (json.hasOwnProperty(dailyGroupJson)) {
                    let dailyGroup = this.parseDailyGroup(dailyGroupJson, json[dailyGroupJson]);

                    if (dailyGroup) {
                        dailyGroups.push(dailyGroup);
                    }
                }
            }
        }

        return dailyGroups;
    }

    parseDailyGroup(groupKey: any, groupDataJson: any): DailyGroup {
        let groupType: DailyGroupType = this.parseDailyGroupType(groupKey);

        if (groupType) {
            let dailies = this.parseDailies(groupDataJson);

            if (dailies.length) {
                return {
                    type: groupType,
                    dailies: dailies
                };
            }
        }

        return null;
    }

    parseDailyGroupType(json: any): DailyGroupType {
        let jsonString: string = json.toString();
        if (DailyGroupType[jsonString] !== undefined) { return DailyGroupType[jsonString]; }

        return null;
    }

    parseDailies(json: any): Daily[] {
        let dailies: Daily[] = [];

        for(let dailyJson of json) {
            dailies.push({
                achievementId: dailyJson.id,
                level: {
                    min: dailyJson.level.min,
                    max: dailyJson.level.max
                },
                contentRequirement: dailyJson.required_access.map(r => DailyContentRequirement[r])
            });
        }

        return dailies;
    }

    parseFractalDailiesData(response: Response): DailyGroup[] {
        let dailies: Daily[] = [];

        if (response.ok) {
            let json: any = response.json();

            for (let fractalAchievementId of json.achievements) {
                dailies.push({
                    achievementId: fractalAchievementId,
                    level: {
                        min: 80,
                        max: 80
                    },
                    contentRequirement: [
                        DailyContentRequirement.GuildWars2,
                        DailyContentRequirement.HeartOfThorns
                    ]
                });
            }
        }

        if (dailies.length) {
            return [{
                type: DailyGroupType.fractals,
                dailies: dailies
            }];
        }

        return [{
            type: DailyGroupType.fractals,
            dailies: [{
                achievementId: 2956,
                level: {
                    min: 80,
                    max: 80
                },
                contentRequirement: [ DailyContentRequirement.GuildWars2, DailyContentRequirement.HeartOfThorns ]
            }]
        }];
    }
}