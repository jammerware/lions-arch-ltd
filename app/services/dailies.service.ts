import { Injectable } from '@angular/core';
import { Daily } from '../models/daily';

const DAILIES: Daily[] = [
  {
    id: "",
    title: "Daily Revenant or Mesmer Winner",
    description: "Win a PvP match as a revenant or mesmer.",
    goalContributions: [

    ],
    builds: [
      "http://metabattle.com/wiki/Build:Herald_-_Power_Shiro",
      "http://metabattle.com/wiki/Build:Chronomancer_-_Power_Shatter"
    ]
  }
];

@Injectable()
export class DailiesService {
  getDailies(): Promise<Daily[]> {
    return Promise.resolve(DAILIES);
  }
}