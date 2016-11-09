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

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/events', pathMatch: 'full' }
    ]),
    CoreModule,
    SharedModule,
    EventsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }