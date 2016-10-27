import { GoalContributionViewModel } from './goal-contribution.viewmodel';

export class EventCardViewModel {
  id: string;
  name: string;
  zone: string;
  description: string;
  countdownText: string;
  goalContributions: GoalContributionViewModel[];
  msTilNextOccurrence: number;
  slug: string;
}