import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DailiesLandingComponent } from './components/dailies-landing/dailies-landing.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'dailies', component: DailiesLandingComponent },
            { path: 'dailies/:type', component: DailiesLandingComponent }
        ])
    ],
    exports: [RouterModule]
})
export class DailiesRoutingModule { }