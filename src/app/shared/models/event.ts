import { IGoalContributor } from './igoalcontributor';
import { GoalContribution } from './goal-contribution';
import { EventWaypoint } from './event-waypoint';
import { Timespan } from '../../timespan/timespan';

export class Event implements IGoalContributor {
  id: string;
  name: string;
  zone: string;
  description: string;
  key: string; // used to localize the throwaway joke text in front of the event timer, like "the lootsplosion starts in 48 minutes"
  primaryWaypointId: string;
  waypoints: EventWaypoint[];
  duration?: number; // length of the event. we'll do this in ms for now. can be null if the event length is dependent on performance
  occurrenceOffsets: Timespan[];
  goalContributions: GoalContribution[];
  guide?: string;
}