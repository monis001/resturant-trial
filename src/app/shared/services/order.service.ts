import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class OrderService{
    private orderSummary : any[] ;

    public getOrderSummary(){

    }

    public setOrderSummary(finalOrder: any[]){
        this.orderSummary = finalOrder
    }

}