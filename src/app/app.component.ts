import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingsService } from './core/services/settings-service/settings.service';
import { Subscription } from 'rxjs/Subscription';
import { Timespan } from './timespan/timespan';

import { EventNotificationsService } from './core/services/event-notifications-service/event-notifications.service';

@Component({
  selector: 'lal-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private title: string = `Lion's Arch, Ltd.`;
  private upcomingEventsSub: Subscription;

  constructor(
    private eventNotificationsService: EventNotificationsService,
    private settingsService: SettingsService) { }

  ngOnInit(): void {
    // load settings
    this.settingsService.init();

    // kick off the thing that listens for upcoming events and ticks every 10 seconds or whatever
    this.upcomingEventsSub = this.eventNotificationsService
      .getUpcomingEvents(Timespan.fromMinutes(10).totalMilliseconds, 15000)
      .subscribe();
  }

  ngOnDestroy(): void {
    if (this.upcomingEventsSub) { this.upcomingEventsSub.unsubscribe(); }
  }
}