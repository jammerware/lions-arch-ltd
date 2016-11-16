import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Daily } from '../models/daily';
import { DailyContentRequirement } from '../models/daily-content-requirement';
import { DailyGroup } from '../models/daily-group';
import { DailyGroupType } from '../models/daily-group-type';

const API_ENDPOINT: string = 'https://api.guildwars2.com/v2/achievements/daily';

@Injectable()
export class Gw2ApiDailiesService {
    constructor(private http: Http) { }

    public getDailies(): Observable<DailyGroup[]> {
        return this.http
            .get(API_ENDPOINT)
            .map(r => this.adaptData(r));
    }

    private adaptData(response: Response): DailyGroup[] {
        let dailyGroups: DailyGroup[] = [];

        if(response.ok) {
            let json: any = response.json();
            
            for(let dailyGroupJson in json) {
                let dailyGroup = this.adaptDailyGroup(dailyGroupJson, json[dailyGroupJson]);
                
                if(dailyGroup) {
                    dailyGroups.push(dailyGroup);
                }
            }
        }

        return dailyGroups;
    }

    adaptDailyGroup(groupKey: any, groupDataJson: any): DailyGroup {
        let groupType: DailyGroupType = this.adaptDailyGroupType(groupKey);

        if(groupType) {
            let dailies = this.adaptDailies(groupDataJson);

            if(dailies.length) {
                return {
                    type: groupType,
                    dailies: dailies
                };
            }
        }

        return null;
    }

    adaptDailyGroupType(json: any): DailyGroupType {
        let jsonString: string = json.toString();
        if(DailyGroupType[jsonString] != undefined) return DailyGroupType[jsonString];

        return null;
    }

    adaptDailies(json: any): Daily[] {
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
}