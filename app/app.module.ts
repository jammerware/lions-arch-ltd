import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// local components
import { AppComponent }  from './app.component';
import { DailiesComponent } from './components/dailies/dailies.component';
import { EventsComponent } from './components/events/events.component';
import { EventCardComponent } from './components/events/event-card/event-card.component';
import { SettingsComponent } from './components/settings/settings.component';

// local services
import { ErrorService } from './services/error.service';
import { EventsService } from './services/events.service';
import { ILocalizationService } from './services/localization/ilocalization.service';
import { TimespanService } from './services/timespan.service';

// local providers
import { localizationServiceProvider } from './services/localization/localization-service.provider';

// local pipes
import { MarkdownPipe } from './pipes/markdown.pipe';
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
    EventCardComponent,
    SettingsComponent,
    MarkdownPipe,
    TimespanPipe
  ],
  providers: [
    EventsService,
    localizationServiceProvider,
    TimespanService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }