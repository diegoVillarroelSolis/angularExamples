import { Component, Input } from '@angular/core';
import { ProductListService } from './product-list.service';
import { OrderListService } from '../order-list/order-list.service';
import { Product } from '../product/product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products : Product[];

  ngOnInit() {
    this.getProducts();
  }

  addToOrder(product : Product) : void{
    console.log("Event Binding at product");
    this.productListService.removeProduct(product);
    this.orderListService.addProduct(product);
  }

  getProducts() : void{
    this.productListService.getProducts().subscribe(
      data => { this.products = data },      
      err => console.error(err),
      () => console.log('done loading products')
    );
  }
 
  constructor(private productListService: ProductListService, private orderListService : OrderListService) { }
}