import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';

const routes: Routes = [
    {
        path: '',
        component : CheckoutComponent
      },
]

@NgModule({
    declarations:[CheckoutComponent],
    imports :[RouterModule.forChild(routes)]
})
export class CheckoutModule {
    
}