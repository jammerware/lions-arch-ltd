import { Injectable } from '@angular/core';

import { BrowserStorageService } from '../browser-storage.service';
import { SettingKey } from './setting-key';

@Injectable()
export class SettingsService {
  constructor(private browserStorageService: BrowserStorageService) { }

  get isEnabledNotifications(): boolean {
    return this.getProperty(SettingKey.isEnabledNotifications) === 'true';
  }

  set isEnabledNotifications(value: boolean) {
    this.setProperty(SettingKey.isEnabledNotifications, value.toString());
  }

  get notificationSoundId(): string {
    return this.getProperty(SettingKey.notificationSoundId);
  }

  set notificationSoundId(value: string) {
    this.setProperty(SettingKey.notificationSoundId, value);
  }

  private getProperty(key: SettingKey): string {
    return this.browserStorageService.getItem(key.toString());
  }

  private setProperty(key: SettingKey, value: string): void {
    this.browserStorageService.setItem(key.toString(), value);
  }
}