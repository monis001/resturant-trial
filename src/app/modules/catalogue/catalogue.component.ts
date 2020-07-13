import { Component, OnInit } from "@angular/core";
import { AccordionConfig } from 'ngx-bootstrap/accordion';
import { food } from 'src/app/util/constant';
import { ActivatedRoute } from '@angular/router';
import { CatalogueService } from './catalogue.service';

export function getAccordionConfig(): AccordionConfig {
    return Object.assign(new AccordionConfig(), { closeOthers: true });
  }

@Component({
    selector:'app-catalogue',
    templateUrl:'./catalogue.component.html',
    styleUrls:['./catalogue.component.css'],
    providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class CatalogueComponent implements OnInit {
  public food : any[] ;
  public searchValue : string ;
  public filterObj = {
    price : '',
    ratings:''
  }
  constructor(private activatedRoute: ActivatedRoute, private catalogueService: CatalogueService){}

  ngOnInit(){
    this.catalogueService.setFoodList(this.activatedRoute.snapshot.data.foodList.data)
    this.food  =  this.catalogueService.getFoodList();
    this.filterOutFoodOnLocation(localStorage.getItem('myState'))
  }

  filterOutFoodOnLocation(location){
    this.food = this.catalogueService.filterFoodListOnLocation(location,[...this.food]);
  }

  seachItOut(){
    this.food = this.catalogueService.filterFoodOnTags(this.searchValue)
  }

  clearItOut(){
    this.food = this.catalogueService.getFoodList();
  }

  clearFiltersItOut(){
   this.clearItOut();
    this.filterObj.price = null ;
    this.filterObj.ratings = null ;

  }

  filterItOut(){
    this.food = this.catalogueService.filterOutItems(parseInt(this.filterObj.price),parseFloat(this.filterObj.ratings));
  }


}