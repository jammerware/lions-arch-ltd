import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

// local modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { TimespanModule } from './timespan/timespan.module';

// local components
import { AppComponent } from './app.component';
import { DailiesComponent } from './components/dailies/dailies.component';
import { EventComponent } from './components/events/event/event.component';
import { EventsComponent } from './components/events/events.component';
import { EventCardComponent } from './components/events/event-card/event-card.component';
import { SettingsComponent } from './components/settings/settings.component';

// local services
import { ErrorService } from './services/error.service';
import { EventsService } from './services/events.service';
import { GoalsService } from './services/goals.service';
import { ILocalizationService } from './services/localization/ilocalization.service';

// local pipes
import { TimeUntilPipe } from './pipes/time-until.pipe';

// local providers
import { localizationServiceProvider } from './services/localization/localization-service.provider';

// module config
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/events', pathMatch: 'full' },
      { path: 'dailies', component: DailiesComponent },
      { path: 'event/:slug/:id', component: EventComponent },
      { path: 'events', component: EventsComponent },
      { path: 'settings', component: SettingsComponent }
    ]),
    MaterialModule.forRoot(),
    CoreModule,
    SharedModule,
    TimespanModule
  ],
  declarations: [
    AppComponent,
    DailiesComponent,
    EventComponent,
    EventsComponent,
    EventCardComponent,
    SettingsComponent,
    TimeUntilPipe
  ],
  providers: [
    EventsService,
    localizationServiceProvider,
    GoalsService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }