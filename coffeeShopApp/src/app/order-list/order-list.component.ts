import { Component } from '@angular/core';
import { OrderListService } from './order-list.service';
import { ProductListService } from '../product-list/product-list.service';
import { Product } from '../product/product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  products : Product[];
  total: number;

  ngOnInit() {
    this.getProducts();
    this.total = this.orderListService.calculateTotalAmount();
  }

  getProducts() : void{
    this.orderListService.getProducts().subscribe(
      data => { this.products = data },      
      err => console.error(err),
      () => console.log('done loading products')
    );
  }

  detachFromOrder(product : Product) : void {
    this.orderListService.removeProduct(product);
    this.productListService.addProduct(product);
  }

  calculateTotalAmount(): number{
    console.log(this.orderListService.calculateTotalAmount());
    return this.orderListService.calculateTotalAmount();
  }
 
  constructor(private orderListService: OrderListService, private productListService : ProductListService) { }
}