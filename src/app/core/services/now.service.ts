import { Injectable } from '@angular/core';

@Injectable()
export class NowService {
    get(): Date {
        return new Date();
    }

    // returns the offset from UTC in ms
    getUtcOffset(): number {
        return new Date().getTimezoneOffset() * 60 * 1000;
    }
}