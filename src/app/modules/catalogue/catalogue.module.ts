import { NgModule } from "@angular/core";
import { CatalogueComponent } from './catalogue.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CatalogueResolver } from './catalogue.resolver';
import { CatalogueService } from './catalogue.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: 'list',
        component : CatalogueComponent,
        resolve:{foodList : CatalogueResolver}
      },
]

@NgModule({
    declarations:[CatalogueComponent],
    imports :[CommonModule,FormsModule,RouterModule.forChild(routes),SharedModule,AccordionModule.forRoot(),ModalModule.forRoot()],
    providers:[CatalogueResolver,CatalogueService]
})
export class CatalogueModule {
    
}