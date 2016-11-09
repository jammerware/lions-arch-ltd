import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Daily } from '../../shared/models/daily';
import { DAILIES } from '../mock-data/mock-dailies';

@Injectable()
export class DailiesService {
  getDailies(): Observable<Daily[]> {
    return Observable.of<Daily[]>(DAILIES);
  }
}