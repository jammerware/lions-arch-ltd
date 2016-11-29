import { Injectable } from '@angular/core';

@Injectable()
export class BrowserStorageService {
    clear(): void {
        localStorage.clear();
    }

    getItem(key: string): string {
        return localStorage.getItem(key);
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }

    setItem(key: string, data: string): void {
        localStorage.setItem(key, data);
    }
}