import { FractalScale } from './fractal-scale';

export class Fractal {
    name: string;
    description: string;
    isNight: boolean;
    paths?: string[];
    scales: FractalScale[];
}