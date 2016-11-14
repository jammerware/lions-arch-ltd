import { NgModule } from '@angular/core';

import { DailiesRoutingModule } from './dailies-routing.module';
import { DailiesComponent } from './dailies.component';

@NgModule({
    imports: [DailiesRoutingModule],
    exports: [DailiesRoutingModule],
    declarations: [DailiesComponent],
    providers: [],
})
export class DailiesModule { }