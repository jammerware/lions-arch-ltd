import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Goal } from '../../shared/models/goal';
import { GOALS } from '../mock-data/mock-goals';

@Injectable()
export class GoalsService {
  getGoals(): Observable<Goal[]> {
    return Observable.of<Goal[]>(GOALS);
  }
}