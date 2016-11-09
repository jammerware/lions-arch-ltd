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
// this is going to be a pretty ugly implementation of this, but it turns out that parsing markdown is quite difficult.
// at least, if you're me. but hey, it's modular, so we can fix it later.
let MarkdownPipe = class MarkdownPipe {
    transform(markdown) {
        if (!markdown)
            return '';
        let output = markdown;
        output = this.replaceLinkSyntax(output);
        output = this.replaceBold(output);
        output = this.replaceItalics(output);
        output = this.replaceHeaders(output);
        return `<div class="markdown">${output}</div>`;
    }
    replaceBreaks(markdown) {
        let paragraphs = markdown.split('\n\n');
        let output = [];
        for (let paragraph of paragraphs) {
            output.push();
        }
        return output.join();
    }
    replaceLinkSyntax(markdown) {
        return markdown.replace(/\[([^\]]+)\]\((\S+)\)/g, function (match, group1, group2) {
            return `<a rel="noopener noreferrer" target="_blank" href="${group2}">${group1}</a>`;
        });
    }
    replaceBold(markdown) {
        return markdown.replace(/\*([^*]+)\*/g, function (match, group1) {
            return `<strong>${group1}</strong>`;
        });
    }
    replaceItalics(markdown) {
        return markdown.replace(/_([^_]+)_/g, function (match, group1) {
            return `<em>${group1}</em>`;
        });
    }
    replaceHeaders(markdown) {
        return markdown.replace(/(#{1,6})(\s\S+)$/gm, function (match, headerStrengthGroup, textGroup) {
            return `<h${headerStrengthGroup.length}>${textGroup}</h${headerStrengthGroup.length}>`;
        });
    }
};
MarkdownPipe = __decorate([
    core_1.Pipe({ name: 'markdown' }), 
    __metadata('design:paramtypes', [])
], MarkdownPipe);
exports.MarkdownPipe = MarkdownPipe;
//# sourceMappingURL=markdown.pipe.js.map