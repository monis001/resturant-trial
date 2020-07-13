import { Component, OnInit, OnDestroy } from "@angular/core";
import { OrderService } from 'src/app/shared/services/order.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
    private subscription: Subscription ;
    public orderList: any[] = [];
    constructor(private orderService : OrderService,private router: Router){

    }
    ngOnInit(){
        this.subscription =  this.orderService.orders$.subscribe((orders)=>{
            if(this.orderList.length  > 0){
                const foodIndex = this.orderList.findIndex((orderItem)=> orderItem.id === orders.id);
                if(foodIndex === -1){
                    this.orderList.push(orders);
                }else{
                    this.orderList[foodIndex].qty+=orders.qty ;
                }
            }else{
                this.orderList.push(orders);
            }
           
        })
    }

    proceedToCheckOut(){
        this.orderService.setOrderSummary(this.orderList);
        this.router.navigate(['checkout']);
    }

    navigateTo(){
        this.router.navigate(['catalogue/list']);  
    }

    navigateToHome(){
        this.router.navigate(['']);  
    }

    ngOnDestroy(){
        if(this.subscription){
            this.subscription.unsubscribe();
        }
    }

}