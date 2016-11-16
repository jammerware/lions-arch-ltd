import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Gw2ApiDailiesService } from './services/gw2api-dailies.service';

@NgModule({
    imports: [HttpModule],
    exports: [HttpModule],
    providers: [Gw2ApiDailiesService]
})
export class Gw2ApiModule { }