import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { OrderListComponent } from './order-list/order-list.component';


import { ProductListService } from './product-list/product-list.service';
import { OrderListService } from './order-list/order-list.service';

@NgModule({
  imports: [
    BrowserModule, 
    HttpClientModule,     
    BrowserAnimationsModule,
    MatCardModule, 
    MatGridListModule,
    MatListModule
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    OrderListComponent
  ],
  providers: [
    ProductListService,
    OrderListService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }