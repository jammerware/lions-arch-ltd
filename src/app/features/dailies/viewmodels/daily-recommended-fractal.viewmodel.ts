import { Daily } from '../../../gw2api/gw2api-dailies-service/models/daily';
import { Fractal } from '../../../shared/models/fractal';
import { FractalScale } from '../../../shared/models/fractal-scale';

export class DailyRecommendedFractalViewModel {
    daily: Daily;
    fractal: Fractal;
    recommendedScale: FractalScale;
}