import { Sound } from '../services/sfx-service';

export let SOUNDS: Promise<Sound[]> = Promise.resolve([
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
]);