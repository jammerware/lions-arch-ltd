import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// GW2 API modules
import { Gw2ApiModule } from '../../gw2api/gw2api.module';

import { DailyViewModelsService } from './services/daily-viewmodels.service';
import { DailiesRoutingModule } from './dailies-routing.module';
import { DailyCardComponent } from './daily-card/daily-card.component';
import { DailiesLandingComponent } from './dailies-landing/dailies-landing.component';

@NgModule({
    imports: [
        CommonModule,
        DailiesRoutingModule,
        Gw2ApiModule
    ],
    exports: [DailiesRoutingModule],
    providers: [DailyViewModelsService],
    declarations: [
        DailyCardComponent,
        DailiesLandingComponent
    ]
})
export class DailiesModule { }