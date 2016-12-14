// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// local modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// feature modules
import { DailiesModule } from './features/dailies/dailies.module';
import { EventsModule } from './features/events/events.module';
import { SettingsModule } from './features/settings/settings.module';

// local components
import { AppComponent } from './app.component';
import { EventsLandingComponent } from './features/events/components/events-landing/events-landing.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '',
      component: EventsLandingComponent
    }]),
    CoreModule,
    SharedModule,
    DailiesModule,
    EventsModule,
    SettingsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }