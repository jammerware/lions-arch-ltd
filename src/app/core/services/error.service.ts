import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {
  logError(message: any): void {
    console.log(message);
  }
}