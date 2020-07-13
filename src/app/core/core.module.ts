import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { HTTPService } from './service/http.service';

@NgModule({
    declarations :[],
    imports:[HttpClientModule],
    providers:[HTTPService]
})
export class CoreModule {

}
