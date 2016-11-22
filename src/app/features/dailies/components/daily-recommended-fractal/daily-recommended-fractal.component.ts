import { Component, Input } from '@angular/core';
import { DailyRecommendedFractalViewModel } from '../../viewmodels/daily-recommended-fractal.viewmodel';

@Component({
    selector: 'lal-daily-recommended-fractal',
    styleUrls: ['daily-recommended-fractal.component.css'],
    templateUrl: 'daily-recommended-fractal.component.html'
})
export class DailyRecommendedFractalComponent {
    @Input() private viewModel: DailyRecommendedFractalViewModel;
}