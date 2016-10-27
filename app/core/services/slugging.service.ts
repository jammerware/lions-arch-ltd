import { Injectable } from '@angular/core';

@Injectable()
export class SluggingService {
    getSlug(input: string) {
        input = input.replace(/\s+/, '-');
        input = input.replace(/[^a-zA-Z0-9-]/, '').toLocaleLowerCase();

        return input;
    }
}