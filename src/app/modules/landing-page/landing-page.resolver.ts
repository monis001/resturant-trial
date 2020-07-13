import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import { LandingPageService } from './landing-page.service';

@Injectable()
export class LandingPageResolver {
  constructor(private landingPageService:LandingPageService) {
  }

  resolve(route: ActivatedRouteSnapshot): Promise<Object> | any{
    
    return this.landingPageService.getMeAvailableStates();
  }
}
