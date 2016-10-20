import { Injectable } from '@angular/core';
import { Event } from '../models/event';
import { TimespanService } from '../services/timespan.service';

const EVENTS: Event[] = [
  {
    id: "215af12c-e3be-4cc7-b041-c87f7a71fee7",
    name: "Night and the Enemy",
    zone: "Verdant Brink",
    description: "Help Pact forces survive the darkest of nights against the servants of Mordremoth.",
    waypoints: [
      { name: "Jaka Itzel", code: "[&BOAHAAA=]" },
      { name: "Mellaggan's Valor", code: "[&BNUHAAA=]" },
      { name: "Pact Encampment", code: "[&BAgIAAA=]" },
      { name: "Shipwreck Peak", code: "[&BN4HAAA=]" },
      { name: "Shrouded Ruins", code: "[&BAEIAAA=]" }
    ],
    duration: 2.7e+6,
    offsetFromUtcMidnight: 4.5e+6,
    interval: 7.2e+6,
    goalContributions: [
      {
        description: "Keep an eye out for Airship Cargo nodes while you're running around during the night. You can crack them open with Pact Crowbars to get Airship Oil (and other stuff), which is required in high quantities for any Heart of Thorns legendary.",
        goalId: "d2382979-d918-4242-92b7-45d140ea399c" // hot legendary crafting
      },
      {
        description: "If the map you're on during this event achieves tier 4 success and if you have 100% participation or greater at the end, you'll get your choice of an exotic armor piece in any slot or weight. Great for gearing up alts!",
        goalId: "56662053-9f3f-49da-86ab-88a7a328661b" // exotic armor
      }
    ]
  },
  {
    id: "5aff38bd-ffe0-4753-9ef2-e272b213d4de",
    name: "The Octovine",
    zone: "Auric Basin",
    description: "The lootsplosion is waiting. Will you answer the call?",
    waypoints: [
      { name: "Northwatch", code: "[&BN0HAAA=]" },
      { name: "Eastwatch", code: "[&BGwIAAA=]" },
      { name: "Southwatch", code: "[&BAIIAAA=]" },
      { name: "Westwatch Peak", code: "[&BAYIAAA=]" },
      { name: "Forgotten City", code: "[&BMYHAAA=]" }
    ],
    duration: 1.2e+6,
    offsetFromUtcMidnight: 5.4e+6,
    interval: 5.4e+6,
    goalContributions: [
      {
        description: "Most of the [Luminate's Backplate](https://wiki.guildwars2.com/wiki/Luminate's_Backplate_(achievement)) collection is connected to this event, so get cracking if you want to look like a giant floaty shinything. And also have an ascended backpack.",
        goalId: "907320dc-3e21-4b78-83e4-a31eae8867d0" // ascended gear
      },
      {
        description: "Exalted Chests of all sizes under Tarir drop auric silver, auric dust, and auric ingots. Once you have the mastery that allows you to converse with the Exalted vendor in Tarir, you can purchase weapn recipes that require these items and make sweet Auric weapons.",
        goalId: "9779ac23-34ee-4033-97a9-85688cd939b9" // exotic crafting
      },
      {
        description: "Exalted Chests have a high chance to drop Bloodstone Dust, which is a reagent for just about every ascended recipe ever. Plus, you can feed it to [Herta](https://wiki.guildwars2.com/wiki/Herta), who's never as hungry as you'd expect.",
        goalId: "56662053-9f3f-49da-86ab-88a7a328661b" // ascended crafting
      }
    ]
  }
];

@Injectable()
export class EventsService {
  constructor(private timespanService: TimespanService) { }

  getEvents(): Promise<Event[]> {
    return Promise.resolve(EVENTS);
  }

  getMsTilNextOccurrenceOf(event: Event): Promise<number> {
    let msSinceMidnightUtc = this.timespanService.getMsSinceMidnightUtc();
    let timeOfNextEvent = 0;

    for(let i = event.offsetFromUtcMidnight; timeOfNextEvent < msSinceMidnightUtc; i += event.interval) {
      timeOfNextEvent = i;
    }

    return Promise.resolve(timeOfNextEvent - msSinceMidnightUtc);
  }
}