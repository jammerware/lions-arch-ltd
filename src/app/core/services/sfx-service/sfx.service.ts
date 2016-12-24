import { Injectable } from '@angular/core';
import { Sound } from './models/sound';
import { AssetService } from '../asset.service';

@Injectable()
export class SfxService {
  constructor(private assetService: AssetService) { }

  getSounds(): Sound[] {
    return [
      {
        id: "780d8b54-a197-4645-9899-eb98c68a4a80",
        name: "Chak Rumble",
        fileName: "chak.mp3"
      },
      {
        id: "66e6cf1c-30ec-412f-aff3-124cb50bd937",
        name: "Warhorn",
        fileName: "warhorn.mp3"
      }
    ];
  }

  getSound(id: string): Sound {
    return this.getSounds().find(s => s.id === id);
  }
}