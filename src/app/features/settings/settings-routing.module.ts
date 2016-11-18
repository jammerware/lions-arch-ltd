import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SettingsLandingComponent } from './components/settings-landing/settings-landing.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'settings', component: SettingsLandingComponent }
        ])
    ],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }