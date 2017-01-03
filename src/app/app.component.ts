import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Timespan } from './modules/timespan/timespan';

import { EventNotificationsService } from './core/services/event-notifications-service/event-notifications.service';

@Component({
  selector: 'lal-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private title: string = `Lion's Arch, Ltd.`;
  private upcomingEventsSub: Subscription;

  constructor(private eventNotificationsService: EventNotificationsService) { }

  ngOnInit(): void {
    // kick off the thing that listens for upcoming events and ticks every 10 seconds or whatever
    this.upcomingEventsSub = this.eventNotificationsService
      .listenForUpcomingEventNotifications(Timespan.fromMinutes(10).totalMilliseconds, 15000)
      .subscribe();
  }

  ngOnDestroy(): void {
    if (this.upcomingEventsSub) { this.upcomingEventsSub.unsubscribe(); }
  }
}