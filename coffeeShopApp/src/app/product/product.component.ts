import { Component, Input } from '@angular/core';
import { Product } from '../product/product.model';
import { OrderListService } from '../order-list/order-list.service';
import { ProductListService } from '../product-list/product-list.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product : Product;
  @Input() isInAOrder : boolean;

  detachFromOrder(product : Product) : void {
    this.orderListService.removeProduct(product);
    this.productListService.addProduct(product);
  }  

  addToOrder(product : Product) : void{
    console.log("Event Binding at product");
    this.productListService.removeProduct(product);
    this.orderListService.addProduct(product);
  }
 
  constructor(private productListService: ProductListService, private orderListService : OrderListService) { }
}