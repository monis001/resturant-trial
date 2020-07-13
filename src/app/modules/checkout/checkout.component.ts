import { Component, OnInit } from "@angular/core";
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
    selector:'app-checkout',
    templateUrl:'./checkout.component.html',
    styleUrls:['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    public orderSummary : any[] ;
    public totalPrice : number ;
    public userDetails: object = {
        fName:'',
        lName:'',
        email:'',
        addres : {
            address1 : ''
        }
    }
    constructor(private orderService : OrderService){

    }
    
    ngOnInit(){
        this.orderSummary =  this.orderService.getOrderSummary();
        this.totalPrice = this.orderSummary.reduce((a,b)=>{
            return a + (b.qty * b.basePrice);
        },0)
    }

}