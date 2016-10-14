import { Injectable } from '@angular/core';
import { Event } from '../models/event';

const EVENTS: Event[] = [
  {
    id: 11,
    name: "Night and the Enemy",
    zone: "Verdant Brink",
    waypoints: [
      { name: "Jaka Itzel", code: "[&BOAHAAA=]" },
      { name: "Mellaggan's Valor", code: "[&BNUHAAA=]" },
      { name: "Pact Encampment", code: "[&BAgIAAA=]" },
      { name: "Shipwreck Peak", code: "[&BN4HAAA=]" },
      { name: "Shrouded Ruins", code: "[&BAEIAAA=]" }
    ],
    duration: 2.7e+6,
    offsetFromUtcMidnight: 4.5e+6,
    interval: 7.2e+6
  },
  {
    id: 12,
    name: "The Octovine",
    zone: "Auric Basin",
    waypoints: [
      { name: "Northwatch", code: "[&BN0HAAA=]" },
      { name: "Eastwatch", code: "[&BGwIAAA=]" },
      { name: "Southwatch", code: "[&BAIIAAA=]" },
      { name: "Westwatch Peak", code: "[&BAYIAAA=]" },
      { name: "Forgotten City", code: "[&BMYHAAA=]" }
    ],
    duration: 1.2e+6,
    offsetFromUtcMidnight: 5.4e+6,
    interval: 5.4e+6
  }
];

@Injectable()
export class EventsService {
  getEvents(): Promise<Event[]> {
    return Promise.resolve(EVENTS);
  }
}