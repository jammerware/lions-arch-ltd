import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'slug' })
export class SlugPipe implements PipeTransform {
    // todo: don't mutate passed-in value. lol... does js pass by ref? i don't even know.
    transform(value: any): string {
        value = value.replace(/\s+/g, '-');
        value = value.replace(/[^a-zA-Z0-9-]/g, '').toLocaleLowerCase();

        return value;       
    }
}