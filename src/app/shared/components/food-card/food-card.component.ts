import { Component, Input, OnInit } from "@angular/core";
import { OrderService } from '../../services/order.service';
import { EstimateTimePipe } from '../../pipes/estimate-time.pipe';

@Component({
    selector:'app-food-card',
    templateUrl:'./food-card.component.html',
    styleUrls:['./food-card.component.css'],
    providers:[EstimateTimePipe]
})

export class FoodCardComponent implements OnInit{
    @Input() data;

    constructor(private orderService : OrderService,private estimateTimePipe: EstimateTimePipe){

    }
    ngOnInit(){
    }

    orderNow(){
        const foodItem = Object.assign({qty:1,estimatedTime : this.estimateTimePipe.transform('') },this.data);
        this.orderService.orders$.next(foodItem);
    }
}