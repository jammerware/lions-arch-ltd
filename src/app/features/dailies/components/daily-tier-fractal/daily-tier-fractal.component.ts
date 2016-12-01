import { Component, Input } from '@angular/core';
import { Fractal } from '../../../../shared/models/fractal';

@Component({
    selector: 'lal-daily-tier-fractal',
    styleUrls: ['daily-tier-fractal.component.scss'],
    templateUrl: 'daily-tier-fractal.component.html'
})
export class DailyTierFractalComponent {
    @Input() private viewModel: Fractal;
}