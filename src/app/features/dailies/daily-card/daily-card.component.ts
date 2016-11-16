import { Component, Input } from '@angular/core';
import { DailyViewModel } from '../viewmodels/daily.viewmodel';

@Component({
    selector: 'lal-daily-card',
    styleUrls: [ 'daily-card.component.css' ],
    templateUrl: 'daily-card.component.html'
})
export class DailyCardComponent {
    @Input() private daily: DailyViewModel;
}