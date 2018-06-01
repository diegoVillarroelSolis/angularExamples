import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { JuiceComponent } from './juice-page/juice.component';
import { ColdDrinkComponent } from './cold-drink-page/cold-drink.component';
import { HotDrinkComponent } from './hot-drink-page/hot-drink.component';
import { SandwichComponent } from './sandwich-page/sandwich.component';
import { FruitComponent } from './fruit-page/fruit.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderComponent } from './order/order.component';

import {Routing} from "./app.routing";
import {CoreModule} from "./core/core.module";

//Componenti Primeng
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {GrowlModule} from 'primeng/growl';
import {DataViewModule} from 'primeng/dataview';
import {DataGridModule} from 'primeng/datagrid';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {TabMenuModule} from 'primeng/tabmenu';
import {DataListModule} from 'primeng/datalist';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Routing,
    BrowserAnimationsModule,
    CoreModule,
    ReactiveFormsModule,

    InputTextModule,
    ButtonModule,
    GrowlModule,
    DataViewModule,
    DataGridModule,
    PanelModule,
    DialogModule,
    TabViewModule,
    CodeHighlighterModule,
    BrowserAnimationsModule,
    TabMenuModule,
    DataListModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent,
    CategoryListComponent,
    JuiceComponent, 
    ColdDrinkComponent,
    HotDrinkComponent, 
    SandwichComponent, 
    FruitComponent,     
    OrderListComponent,
    OrderComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }