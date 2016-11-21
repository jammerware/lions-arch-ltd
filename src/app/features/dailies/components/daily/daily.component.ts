import { Component, Input } from '@angular/core';
import { DailyViewModel } from '../../viewmodels/daily.viewmodel';

@Component({
    selector: 'lal-daily',
    styleUrls: [ 'daily.component.css' ],
    templateUrl: 'daily.component.html'
})
export class DailyComponent {
    @Input() private daily: DailyViewModel;
}