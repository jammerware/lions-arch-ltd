import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';

@Injectable()
export class ErrorService {
  constructor(private toastService: ToastService) { }

  logError(message: any): void {
    this.toastService.show(`Error :( -> ${message}`, "OK");
  }
}