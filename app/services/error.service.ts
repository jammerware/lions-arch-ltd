import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {
  logError(message: string) : void {
    console.log(message);
  }
}