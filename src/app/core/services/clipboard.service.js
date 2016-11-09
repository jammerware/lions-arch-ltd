"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
//import Clipboard from 'clipboard';
let ClipboardService = class ClipboardService {
    init(onSuccess, onFailure) {
        // TODO:
        // WTF.
        //
        // I can't figure out how to import the Clipboard module. Basically, if the value of "module" in tsconfig.json is set to "system",
        // which I thought I was using, Javascript doesn't know what "module" is when the app is bootstrapped on index.html. However, that
        // does allow me to import Clipboard as written above. On the other hand, if I set the "module" tsconfig value to "commonjs", everything works
        // EXCEPT my ability to import clipboard above.
        // TODO: actually learn how anything works.
        // let clipboard = new Clipboard('.clipboard-trigger');
        // clipboard.on('success', onSuccess);
        // clipboard.on('error', onFailure);
    }
};
ClipboardService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], ClipboardService);
exports.ClipboardService = ClipboardService;
//# sourceMappingURL=clipboard.service.js.map