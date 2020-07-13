import { Injectable } from "@angular/core";
import { HTTPService } from 'src/app/core/service/http.service';
import { FoodEndPoints } from 'src/app/util/endpoints';
import { food } from 'src/app/util/constant';

@Injectable()
export class CatalogueService {
    private foodList:  any[];

    constructor(private httpService:HTTPService){

    } 

    getFoodListFromHTTP(){
        const url = FoodEndPoints.getfoodList();
        return this.httpService.get(url)
    }

    public setFoodList(foodList){
        this.foodList = foodList ;
    }

    public getFoodList(){
        return this.foodList ;
    }

    filterFoodListOnLocation(location, foodList){
        const filterFood  = foodList.filter((food) => food.location === location) ;
        return filterFood.length ===  0 ? foodList : filterFood ;  
    }

    filterFoodOnTags(tag){
        return this.foodList.filter((food)=> food.tags.indexOf(tag)!==-1);
    }

    filterOutItems(price,rating){
        const objectMapper = {} ;
        const finalItems = []
        this.foodList.forEach((item)=>{
            if(item.basePrice === price){
                objectMapper[item.id] = objectMapper[item.id]  ? [item] : [...objectMapper[item.id],item] ;
            }
        });
        this.foodList.forEach((item)=>{
            if(item.rating === rating){
                objectMapper[item.id] = objectMapper[item.id]  ? [item] : [...objectMapper[item.id],item] ;
            }
        });
        Object.keys(objectMapper).forEach((value,key)=>{
           if(objectMapper[value]!== undefined){
               finalItems.push(objectMapper[value][0]);
           }
        });

        return finalItems ;
    }
}