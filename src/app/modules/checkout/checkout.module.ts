import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component : CheckoutComponent
      },
]

@NgModule({
    declarations:[CheckoutComponent],
    imports :[RouterModule.forChild(routes),CommonModule,FormsModule],
})
export class CheckoutModule {
    
}