import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsLandingComponent } from './components/settings-landing/settings-landing.component';

@NgModule({
    imports: [
        FormsModule,
        SettingsRoutingModule,
        SharedModule
    ],
    exports: [SettingsRoutingModule],
    declarations: [SettingsLandingComponent],
})
export class SettingsModule { }