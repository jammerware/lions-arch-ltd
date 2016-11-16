import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Gw2ApiAchievementsService } from './gw2api-achievements-service/gw2api-achievements.service';
import { Gw2ApiDailiesService } from './gw2api-dailies-service/gw2api-dailies.service';

@NgModule({
    imports: [HttpModule],
    exports: [HttpModule],
    providers: [
        Gw2ApiAchievementsService,
        Gw2ApiDailiesService
    ]
})
export class Gw2ApiModule { }