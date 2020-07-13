import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({providedIn:'root'})
export class OrderService{
    private orderSummary : any[] = [] ;
    public orders$: Subject<any> = new Subject();

    public getOrderSummary(){
        return this.orderSummary ;
    }

    public setOrderSummary(finalOrder: any[]){
        this.orderSummary = finalOrder ;
    }

}