import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Daily } from '../models/daily';

@Injectable()
export class Gw2ApiDailiesService {
    constructor(private http: Http) { }

    public getDailies(): Observable<Daily[]> {
        
    }
}