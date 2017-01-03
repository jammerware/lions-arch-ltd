import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

import { Event } from '../../../shared/models/event';
import { AssetService } from '../../services/asset.service';
import { AudioPlaybackService } from '../../services/audio-playback-service/audio-playback.service';
import { EventsService } from '../../services/events-service/events.service';
import { ILOCALIZATIONSERVICE, ILocalizationService } from '../../services/localization/ilocalization.service';
import { NotificationsService } from '../notifications.service';
import { SettingsService } from '../settings-service';
import { SfxService } from '../sfx-service';
import { SlugService } from '../slug-service/slug.service';

@Injectable()
export class EventNotificationsService {
  private cache: { [eventId: string]: number; } = {};

  constructor(
    private assetsService: AssetService,
    private audioPlaybackService: AudioPlaybackService,
    private eventsService: EventsService,
    @Inject(ILOCALIZATIONSERVICE) private localizationService: ILocalizationService,
    private notificationsService: NotificationsService,
    private router: Router,
    private settingsService: SettingsService,
    private sfxService: SfxService,
    private slugService: SlugService) { }

  addToCache(eventId: string, offset: number) {
    this.cache[eventId] = offset;
  }

  getCacheContains(eventId: string, offset: number) {
    return this.cache[eventId] === offset;
  }

  listenForUpcomingEventNotifications(eventWindowDuration: number, pollingInterval: number): Observable<void> {
    // ask for notification permission
    this.notificationsService.requestPermission();

    // build subscription and return
    return Observable.combineLatest(
      Observable.interval(pollingInterval),
      this.eventsService.getEvents(),
      (tick: number, events: Event[]) => {
        let eligibleEvents = this.getEligibleEvents(events, eventWindowDuration);
        this.generateNotifications(eligibleEvents);
        this.playNotificationSound(eligibleEvents);
      }
    );
  }

  getEligibleEvents(events: Event[], eventWindowDuration: number): Event[] {
    let eligibleEvents: Event[] = [];

    for (let event of events) {
      if (this.eventsService.getMsTilNextOccurrenceOfSync(event) < eventWindowDuration) {
        let offsetOfNextOccurrence = this.eventsService.getOffsetOfNextOccurrenceSync(event);

        if (this.notificationsService.getHasPermission() && !this.getCacheContains(event.id, offsetOfNextOccurrence)) {
          eligibleEvents.push(event);
        }
      }
    }

    return eligibleEvents;
  }

  generateNotifications(events: Event[]): void {
    for (let event of events) {
      this.notificationsService.say(
        `${event.name}`,
        this.localizationService.getEventStartingSoon(event.key),
        this.assetsService.getUrl('images/icons/event-notification-icons/' + event.key + '.jpg'),
        () => this.router.navigate(['/event', this.slugService.getSlug(event.name), event.id])
      );

      // cache that we've notified about this occurrence
      let offsetOfNextOccurrence = this.eventsService.getOffsetOfNextOccurrenceSync(event);
      this.addToCache(event.id, offsetOfNextOccurrence);
    }
  }

  playNotificationSound(events: Event[]): void {
    if (this.settingsService.notificationSoundId && events && events.length) {
      let notificationSound = this.sfxService.getSound(this.settingsService.notificationSoundId);
      this.audioPlaybackService.play(this.assetsService.getNotificationSoundUrl(notificationSound.fileName));
    }
  }
}