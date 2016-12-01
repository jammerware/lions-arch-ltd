import { Component, Input } from '@angular/core';
import { GoalContribution } from '../../../shared/models/goal-contribution';

@Component({
    selector: 'goal-contribution',
    styleUrls: ['./goal-contribution.component.scss'],
    templateUrl: './goal-contribution.component.html'
})
export class GoalContributionComponent {
    @Input() private goalContribution: GoalContribution;
}