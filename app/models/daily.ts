import { IGoalContributor } from './igoalcontributor';
import { GoalContribution } from './goal-contribution';

export class Daily implements IGoalContributor {
  id: string;
  title: string;
  description: string;
  goalContributions: GoalContribution[];
  builds?: string[];
}