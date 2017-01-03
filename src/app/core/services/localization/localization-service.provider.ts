import { ILOCALIZATIONSERVICE, ILocalizationService } from './ilocalization.service';
import { EnLocalizationService } from './localization.en.service';

export function resolveLocalizationProvider(): ILocalizationService {
  return new EnLocalizationService();
};

export let localizationServiceProvider = {
  provide: ILOCALIZATIONSERVICE,
  useFactory: resolveLocalizationProvider
};