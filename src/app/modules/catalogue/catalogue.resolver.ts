import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import { CatalogueService } from './catalogue.service';

@Injectable()
export class CatalogueResolver {
  constructor(private catalogueService:CatalogueService) {
  }

  resolve(route: ActivatedRouteSnapshot): Promise<Object> | any{
    
    return this.catalogueService.getFoodListFromHTTP();
  }
}
