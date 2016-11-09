import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { GoalContributionComponent }   from './goal-contribution/goal-contribution.component';

@NgModule({
    declarations: [GoalContributionComponent],
    exports: [GoalContributionComponent],
    imports: [SharedModule]
})
export class GoalContributionsModule { }