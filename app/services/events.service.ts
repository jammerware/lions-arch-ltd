import { Injectable } from '@angular/core';
import { Event } from '../models/event';
import { TimespanService } from '../timespan/timespan.service';

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
        description: "If you achieve 100% (or greater) participation on a map that reaches tier 4 during this event, you'll get your choice of an exotic armor piece in any slot or weight. Great for gearing up alts!",
        goalId: "56662053-9f3f-49da-86ab-88a7a328661b" // exotic armor
      }
    ],
    key: "vb",
    guide: `

    `
  },
  {
    id: "5aff38bd-ffe0-4753-9ef2-e272b213d4de",
    name: "The Octovine",
    zone: "Auric Basin",
    description: "Stop the Mordrem from taking Tarir. Don't screw up South.",
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
        goalId: "b40fb9c2-65a2-46d4-a3c3-dbb1b907bdd5" // ascended gear
      },
      {
        description: "Exalted Chests of all sizes under Tarir drop auric silver, auric dust, and auric ingots. Once you have the mastery that allows you to converse with the Exalted vendor in Tarir, you can purchase recipes that combine these items to make sweet Auric weapons.",
        goalId: "9779ac23-34ee-4033-97a9-85688cd939b9" // exotic crafting
      },
      {
        description: "Exalted Chests have a high chance to drop [Bloodstone Dust](https://wiki.guildwars2.com/wiki/Pile_of_Bloodstone_Dust), which is a reagent for just about every ascended recipe ever. Plus, you can feed it to [Herta](https://wiki.guildwars2.com/wiki/Herta), who's never as hungry as you'd expect.",
        goalId: "56662053-9f3f-49da-86ab-88a7a328661b" // ascended crafting
      }
    ],
    key: "ab",
    guide: `
      Assault on Tarir (or whatever it's called) is a single-stage event that is the culmination of
    `
  },
  {
    id: "",
    name: "Shadow of the Dragon",
    zone: "Dragon's Stand",
    description: "Three lanes. Three towers. One mouth. Also a weird body. Don't forget your machetes!",
    waypoints: [
      { name: "Pact Base North", code: "" },
      { name: "Pact Base South", code: ""}
    ],
    duration: 5.4e+6,
    offsetFromUtcMidnight: 0,
    interval: 5.4e+6,
    goalContributions: [
      {
        description: "*This* _meta-event_ is the only source of [Crystalline Ore](https://wiki.guildwars2.com/wiki/Crystalline_Ore) in the game, which is used for all kinds of stuff",
        goalId: "" // legendary crafting: hot
      },
      {
        description: "A vendor that appears at the entrance of this zone prior to the beginning of the meta-event (and again at the final area of the event) sells plated weapons, and some of them lead to \"Specialization Collection\" achievements that grant relatively cheap ascended weapons if you have the required mastery.",
        goalId: "" // ascended gear
      },
      {
        description: "Most Heart of Thorns meta-events give good XP, but Dragon's Stand is one of the best. Pop an XP booster, do your local events, and spank some Mordrem. You'll be gliding on leylines before you know it.",
        goalId: "78c9fff9-2136-4bd8-9976-7c06ef898b32" // XP
      }
    ],
    key: "ds"
  }
];

@Injectable()
export class EventsService {
  constructor(private timespanService: TimespanService) { }

  getEvent(id: string): Promise<Event> {
    return Promise.resolve(EVENTS.find(e => e.id == id));
  }

  getEvents(): Promise<Event[]> {
    return Promise.resolve(EVENTS);
  }

  getMsTilNextOccurrenceOf(event: Event): Promise<number> {
    let timespanSinceMidnightUtc = this.timespanService.getTimespanSinceMidnightUtc();
    let msSinceMidnightUtc = timespanSinceMidnightUtc.totalMilliseconds;
    let timeOfNextEvent = 0;

    for(let i = event.offsetFromUtcMidnight; timeOfNextEvent < msSinceMidnightUtc; i += event.interval) {
      timeOfNextEvent = i;
    }

    return Promise.resolve(timeOfNextEvent - msSinceMidnightUtc);
  }
}