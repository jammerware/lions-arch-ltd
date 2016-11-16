import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shared
import { SharedModule } from '../../shared/shared.module';

// GW2 API modules
import { Gw2ApiModule } from '../../gw2api/gw2api.module';

import { DailyViewModelsService } from './services/daily-viewmodels.service';
import { DailiesRoutingModule } from './dailies-routing.module';
import { DailiesLandingComponent } from './dailies-landing/dailies-landing.component';
import { DailyComponent } from './daily/daily.component';

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
        DailiesLandingComponent
    ]
})
export class DailiesModule { }