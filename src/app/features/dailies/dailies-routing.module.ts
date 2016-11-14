import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DailiesComponent } from './dailies.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'dailies', component: DailiesComponent }
        ])
    ],
    exports: [RouterModule]
})
export class DailiesRoutingModule { }