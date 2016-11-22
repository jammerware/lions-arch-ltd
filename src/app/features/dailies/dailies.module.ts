import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shared
import { SharedModule } from '../../shared/shared.module';

// GW2 API modules
import { Gw2ApiModule } from '../../gw2api/gw2api.module';

import { DailyViewModelsService } from './services/daily-viewmodels.service';
import { DailiesRoutingModule } from './dailies-routing.module';
import { DailiesLandingComponent } from './components/dailies-landing/dailies-landing.component';
import { DailyComponent } from './components/daily/daily.component';
import { DailyGroupComponent } from './components/daily-group/daily-group.component';
import { DailyGroupFractalsComponent } from './components/daily-group-fractals/daily-group-fractals.component';
import { DailyRecommendedFractalComponent } from './components/daily-recommended-fractal/daily-recommended-fractal.component';
import { DailyTierFractalComponent } from './components/daily-tier-fractal/daily-tier-fractal.component';

@NgModule({
    imports: [
        CommonModule,
        DailiesRoutingModule,
        Gw2ApiModule,
        SharedModule
    ],
    exports: [DailiesRoutingModule],
    providers: [DailyViewModelsService],
    declarations: [
        DailyComponent,
        DailyGroupComponent,
        DailyGroupFractalsComponent,
        DailyRecommendedFractalComponent,
        DailyTierFractalComponent,
        DailiesLandingComponent
    ]
})
export class DailiesModule { }