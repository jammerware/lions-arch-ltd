import { TimeUntilPipe } from '../../app/pipes/time-until.pipe';
import { EnLocalizationService } from '../../app/services/localization/localization.en.service';

describe("The timespan pipe", function() {
  it("just toString()s positive integers", function() {
    let localizationService = new EnLocalizationService();
    let pipe = new TimeUntilPipe(localizationService);

    expect(pipe.transform(1234)).toBe('1234');
  });
});