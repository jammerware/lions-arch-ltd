import { Injectable } from '@angular/core';

@Injectable()
export class AudioPlaybackService {
  play(url: string): void {
    let audio = new Audio(url);
    audio.play();
  }
}