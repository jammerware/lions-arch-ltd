import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  log(message: any): void {
    console.log(message);
  }
}