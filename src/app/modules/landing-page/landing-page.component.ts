import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector : 'app-landing-page',
    templateUrl:'./landing-page.component.html',
    styleUrls:['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
    public foodStates: any ;
    public selectedFoodState : any ;
    constructor(private activatedRoute : ActivatedRoute, private route : Router){}

    ngOnInit(){
        this.foodStates = this.activatedRoute.snapshot.data.foodStates.data ;
    }

    findInThisLocation(){
        if(this.selectedFoodState){
            localStorage.setItem('myState',this.selectedFoodState);
            this.goToCatalogue();
        }
        
    }

    goToCatalogue(){``
        this.route.navigate(['catalogue/list']);
    }
}