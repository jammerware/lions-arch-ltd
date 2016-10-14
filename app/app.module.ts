import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// local components
import { AppComponent }  from './app.component';
import { DailiesComponent } from './components/dailies/dailies.component';
import { EventsComponent } from './components/events/events.component';
import { SettingsComponent } from './components/settings/settings.component';

// local services
import { EventsService } from './services/events.service';
import { ILocalizationService } from './services/localization/ilocalization.service';

// local providers
import { localizationServiceProvider } from './services/localization/localization-service.provider';

// local pipes
import { TimespanPipe } from './pipes/timespan.pipe';

// module config
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/events', pathMatch: 'full' },
      { path: 'dailies', component: DailiesComponent },
      { path: 'events', component: EventsComponent },
      { path: 'settings', component: SettingsComponent }
    ])
  ],
  declarations: [
    AppComponent,
    DailiesComponent,
    EventsComponent,
    SettingsComponent,
    TimespanPipe
  ],
  providers: [
    EventsService,
    localizationServiceProvider
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }