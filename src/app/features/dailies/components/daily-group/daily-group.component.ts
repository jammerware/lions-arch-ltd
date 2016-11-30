import { Component, Input } from '@angular/core';
import { DailyGroup } from '../../../../modules/gw2api/gw2api-dailies-service/models/daily-group';

@Component({
    selector: 'lal-daily-group',
    templateUrl: 'daily-group.component.html'
})
export class DailyGroupComponent {
    @Input() private dailyGroup: DailyGroup;
}