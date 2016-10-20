import { Injectable } from '@angular/core';
import { Goal } from '../models/goal';

const GOALS: Goal[] = [
  {
    id: "566c01d0-380e-413b-9173-3012cb1e25d2",
    name: "Ascended Crafting",
    description: "The cheapest way to gear up ever. Well, it would be if it weren't for all those non-ascended mats you'll need."
  },
  {
    id: "907320dc-3e21-4b78-83e4-a31eae8867d0",
    name: "Ascended Gear",
    description: "Pink is the new purple."
  },
  {
    id: "56662053-9f3f-49da-86ab-88a7a328661b",
    name: "Exotic Armor",
    description: "Gear up your alts. Set your main up with a new build. Salvage it for globules. We all know what you're going to do."
  },
  {
    id: "9779ac23-34ee-4033-97a9-85688cd939b9",
    name: "Exotic Crafting",
    description: "Well, you COULD just wait for something with Berserker's stats to drop..."
  },
  {
    id: "78c9fff9-2136-4bd8-9976-7c06ef898b32",
    name: "Mastery Experience",
    description: "Wait, you don't have Leyline Gliding yet?"
  },
  {
    id: "d2382979-d918-4242-92b7-45d140ea399c",
    name: "Legendary Crafting (Heart of Thorns)",
    description: "Forge powerful and unique weapons by searching the Heart of Maguuma high and low, undertaking the boldest and bravest of adventures, and spending just _staggering_ amounts of gold."
  },
  {
    id: "005449d2-391d-48cc-abca-77758e5c2bdf",
    name: "Unique Skins",
    description: "Beauty is in the eye of the beholder... except when you're talking about machined weapon skins. Those are just awesome."
  },
];

@Injectable()
export class GoalsService {
  getGoals(): Promise<Goal[]> {
    return Promise.resolve(GOALS);
  }
}