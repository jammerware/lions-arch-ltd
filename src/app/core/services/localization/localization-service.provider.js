"use strict";
const ilocalization_service_1 = require('./ilocalization.service');
const localization_en_service_1 = require('./localization.en.service');
exports.localizationServiceProvider = {
    provide: ilocalization_service_1.ILOCALIZATIONSERVICE,
    useFactory: () => { return new localization_en_service_1.EnLocalizationService(); }
};
//# sourceMappingURL=localization-service.provider.js.map