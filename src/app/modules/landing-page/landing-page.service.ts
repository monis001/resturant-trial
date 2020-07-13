import {Injectable} from '@angular/core';
import { HTTPService } from 'src/app/core/service/http.service';
import { FoodEndPoints } from 'src/app/util/endpoints';
@Injectable()
export class LandingPageService {

    constructor(private httpService: HTTPService){}

    getMeAvailableStates(){
        const url = FoodEndPoints.getFoodStates() ;
        return this.httpService.get(url);
    }

}