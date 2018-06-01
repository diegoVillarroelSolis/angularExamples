import { Component, Input } from '@angular/core';
import { Product } from '../product/product.model';
import { OrderListService } from '../order-list/order-list.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product : Product;

  addToOrder(product : Product) : void{
    console.log("Event Binding at product");
    this.orderListService.addProduct(product);
  }
 
  constructor(private orderListService : OrderListService) { }
}