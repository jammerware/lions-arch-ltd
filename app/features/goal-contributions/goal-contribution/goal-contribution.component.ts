import { Component, Input, OnInit } from '@angular/core';
import { GoalContribution } from '../../../shared/models/goal-contribution';

@Component({
    moduleId: module.id,
    selector: 'goal-contribution',
    styleUrls: ['goal-contribution.component.css'],
    templateUrl: 'goal-contribution.component.html'
})
export class GoalContributionComponent implements OnInit {
    @Input() private goalContribution: GoalContribution;

    constructor() { }

    ngOnInit() { 
    }
}