import { Component, Input } from '@angular/core';
import { GoalViewModel } from '../../viewmodels/goal.viewmodel';

@Component({
  selector: 'lal-goal-icon',
  styleUrls: ['./goal-icon.component.scss'],
  template: `<div [md-tooltip]="(isLarge ? '' : viewModel.name)" [class]="'goal-icon ' + (isLarge ? 'large ' : '') + viewModel.key"></div>`
})
export class GoalIconComponent {
  @Input() isLarge: boolean;
  @Input() viewModel: GoalViewModel;
}