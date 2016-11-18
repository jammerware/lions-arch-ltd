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

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/events', pathMatch: 'full' }
    ]),
    CoreModule,
    SharedModule,
    DailiesModule,
    EventsModule,
    SettingsModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }