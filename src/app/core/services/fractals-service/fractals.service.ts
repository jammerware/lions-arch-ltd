import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { FRACTALS } from '../../mock-data/mock-fractals';
import { Fractal } from '../../../shared/models/fractal';

@Injectable()
export class FractalsService {
    getFractals(): Observable<Fractal[]> {
        return Observable.of(FRACTALS);
    }
}