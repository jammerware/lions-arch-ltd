// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// local modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// feature modules
import { EventsModule } from './features/events/events.module';

// local components
import { AppComponent } from './app.component';
import { DailiesComponent } from './components/dailies/dailies.component';
import { SettingsComponent } from './components/settings/settings.component';

// module config
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/events', pathMatch: 'full' },
      { path: 'dailies', component: DailiesComponent },
      { path: 'settings', component: SettingsComponent }
    ]),
    CoreModule,
    SharedModule,
    EventsModule
  ],
  declarations: [
    AppComponent,
    DailiesComponent,
    SettingsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }