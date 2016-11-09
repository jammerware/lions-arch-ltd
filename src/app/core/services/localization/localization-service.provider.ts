import { ILOCALIZATIONSERVICE } from './ilocalization.service';
import { EnLocalizationService } from './localization.en.service';

export let localizationServiceProvider = {
  provide: ILOCALIZATIONSERVICE,
  useFactory: () => { return new EnLocalizationService(); }
}