import { Component, Input } from '@angular/core';
import { Product } from '../product/product.model';
import { OrderListService } from '../order-list/order-list.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'product',
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class ProductComponent {
  @Input() product : Product;

  addToOrder(product : Product) : void{
    this.orderListService.addProduct(product);
  }
 
  constructor(private orderListService : OrderListService) { }
}