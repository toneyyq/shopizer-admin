import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class AlertService {
  static showErrorAlert(message: string): void {
    if (!environment.production) {
      alert(message);
    }
  }
}
