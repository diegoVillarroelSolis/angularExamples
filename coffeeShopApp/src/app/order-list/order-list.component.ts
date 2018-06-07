import { Component } from '@angular/core';
import { OrderListService } from './order-list.service';
import { Product } from '../product/product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  products : Product[];

  ngOnInit() {
    this.getProducts();
  }

  getProducts() : void{
    this.orderListService.getProducts().subscribe(
      data => { this.products = data},      
      err => console.error(err),
      () => console.log('done loading products')
    );
  }

  calculateTotalAmount(): number{
    console.log(this.orderListService.calculateTotalAmount());
    return this.orderListService.calculateTotalAmount();
  }

  submitOrder(): void{
    this.orderListService.submitOrder();
  }
 
  constructor(private orderListService: OrderListService) { }
}