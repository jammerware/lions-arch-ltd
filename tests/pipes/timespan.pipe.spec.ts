import { TimespanPipe } from '../../app/pipes/timespan.pipe';
import { EnLocalizationService } from '../../app/services/localization/localization.en.service';

describe("The timespan pipe", function() {
  it("just toString()s positive integers", function() {
    let localizationService = new EnLocalizationService();
    let pipe = new TimespanPipe(localizationService);

    expect(pipe.transform(1234)).toBe('1234');
  });
});