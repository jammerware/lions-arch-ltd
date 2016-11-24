import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AssetService } from './core/services/asset.service';
import { EventNotificationsService } from './core/services/event-notifications-service/event-notifications.service';
import { NotificationsService } from './core/services/notifications.service';
import { SlugService } from './core/services/slug-service/slug.service';

@Component({
  selector: 'lal-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private title: string = `Lion's Arch, Ltd.`;
  private upcomingEventsSub: Subscription;

  constructor(
    private assetsService: AssetService,
    private eventNotificationsService: EventNotificationsService,
    private notificationsService: NotificationsService,
    private slugService: SlugService,
    private router: Router) { }

  ngOnInit(): void {
    this.upcomingEventsSub = this.eventNotificationsService
      .getUpcomingEvents(3.6e+6, 15000)
      .subscribe(events => {
        for (let event of events) {
          this.notificationsService.say(
            `${event.name}`,
            `It's starting soon in ${event.zone}!`,
            this.assetsService.getUrl('images/icons/event-notification-icons/' + event.key + '.jpg'),
            () => {
              this.router.navigate(['/event', this.slugService.getSlug(event.name), event.id ]);
            }
          );
        }
      });
  }

  ngOnDestroy(): void {
    if (this.upcomingEventsSub) { this.upcomingEventsSub.unsubscribe(); }
  }
}