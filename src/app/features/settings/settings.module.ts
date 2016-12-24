import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import {
  NotificationsFormComponent,
  SettingsLandingComponent
} from './components';

@NgModule({
  imports: [
    FormsModule,
    SettingsRoutingModule,
    SharedModule
  ],
  exports: [SettingsRoutingModule],
  declarations: [
    NotificationsFormComponent,
    SettingsLandingComponent
  ],
})
export class SettingsModule { }