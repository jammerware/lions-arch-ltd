import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DailiesLandingComponent } from './dailies-landing/dailies-landing.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'dailies', component: DailiesLandingComponent }
        ])
    ],
    exports: [RouterModule]
})
export class DailiesRoutingModule { }