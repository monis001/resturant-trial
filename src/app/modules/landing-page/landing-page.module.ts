import { NgModule } from "@angular/core";
import { LandingPageComponent } from './landing-page.component';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageResolver } from './landing-page.resolver';
import { LandingPageService } from './landing-page.service';
import { LandingPageGuardService as Guard} from './landing-page.guard';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        resolve: {foodStates: LandingPageResolver},
        component : LandingPageComponent,
        
      },
]

@NgModule({
    declarations:[LandingPageComponent],
    imports :[RouterModule.forChild(routes), NgSelectModule,FormsModule],
    providers:[LandingPageResolver,LandingPageService,Guard]
})
export class LandingPageModule {
    
}