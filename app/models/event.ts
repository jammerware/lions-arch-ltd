import { Waypoint } from './waypoint';

export class Event {
  id: number;
  name: string;
  zone: string;
  waypoints: Waypoint[];
  duration?: number; // length of the event. we'll do this in ms for now. can be null if the event length is dependent on performance
  offsetFromUtcMidnight: number; // how many ms after utc midnight the first occurence starts ms
  interval: number // number of ms between the beginning instances of the event (keep an eye on whether this is different than duration)
}