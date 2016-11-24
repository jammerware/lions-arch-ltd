import { Injectable } from '@angular/core';

@Injectable()
export class SlugService {
    getSlug(input: string): string {
        let value = input;
        if (!value) { return ''; }

        value = value.replace(/\s+/g, '-');
        value = value.replace(/[^a-zA-Z0-9-]/g, '').toLocaleLowerCase();

        return value;
    }
}