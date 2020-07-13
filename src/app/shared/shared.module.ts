import { NgModule } from "@angular/core";
import { FoodCardComponent } from './components/food-card/food-card.component';
import { CommonModule } from '@angular/common';
import { EstimateTimePipe } from './pipes/estimate-time.pipe';

@NgModule({
    declarations:[FoodCardComponent,EstimateTimePipe],
    exports:[FoodCardComponent],
    imports  :[CommonModule ]
})
export class SharedModule {

}