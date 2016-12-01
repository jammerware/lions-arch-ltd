import { Component, Input } from '@angular/core';
import { DailyGroupFractalsViewModel } from '../../viewmodels/daily-group-fractals.viewmodel';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'lal-daily-group-fractals',
    styleUrls: ['./daily-group-fractals.component.scss'],
    templateUrl: 'daily-group-fractals.component.html'
})
export class DailyGroupFractalsComponent {
    @Input() fractalDailies: Observable<DailyGroupFractalsViewModel>;
}