import { Component, Input, OnInit } from '@angular/core';
import { DailyGroupFractalsViewModel } from '../../viewmodels/daily-group-fractals.viewmodel';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'lal-daily-group-fractals',
    styleUrls: [ './daily-group-fractals.component.css' ],
    templateUrl: 'daily-group-fractals.component.html'
})
export class DailyGroupFractalsComponent implements OnInit {
    @Input() fractalDailies: Observable<DailyGroupFractalsViewModel>;

    ngOnInit() {
        console.log('received dailies', this.fractalDailies);
    }
}