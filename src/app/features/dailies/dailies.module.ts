import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// GW2 API modules
import { Gw2ApiModule } from '../../gw2-api/gw2-api.module';

import { DailiesRoutingModule } from './dailies-routing.module';
import { DailiesComponent } from './dailies.component';

@NgModule({
    imports: [
        CommonModule,
        DailiesRoutingModule,
        Gw2ApiModule
    ],
    exports: [DailiesRoutingModule],
    declarations: [DailiesComponent]
})
export class DailiesModule { }