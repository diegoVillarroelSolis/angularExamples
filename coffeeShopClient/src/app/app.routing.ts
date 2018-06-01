import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { JuiceComponent } from './juice-page/juice.component';
import { ColdDrinkComponent } from './cold-drink-page/cold-drink.component';
import { HotDrinkComponent } from './hot-drink-page/hot-drink.component';
import { SandwichComponent } from './sandwich-page/sandwich.component';
import { FruitComponent } from './fruit-page/fruit.component';

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', component: JuiceComponent },
  { path: 'juice', component: JuiceComponent },
  { path: 'coldDrink', component: ColdDrinkComponent },
  { path: 'hotDrink', component: HotDrinkComponent },
  { path: 'sandwich', component: SandwichComponent },
  { path: 'fruit', component: FruitComponent },

  // { path: '**', redirectTo: '/juice'}
];
export const Routing = RouterModule.forRoot(appRoutes);
