import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector:'app-food-card',
    templateUrl:'./food-card.component.html',
    styleUrls:['./food-card.component.css']
})

export class FoodCardComponent implements OnInit{
    @Input() data;

    constructor(){

    }
    ngOnInit(){
        debugger
    }
}