import { Component } from '@angular/core';
import { OrderListService } from './order-list.service';
import { Product } from '../product/product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.html',
  styleUrls: ['./order-list.css']
})
export class OrderListComponent {
  products : Product[];

  ngOnInit() {
    this.getProducts();
  }

  getProducts() : void{
    this.orderListService.getProducts().subscribe(
      data => { this.products = data },      
      err => console.error(err),
      () => console.log('done loading products')
    );
  }
 
  constructor(private orderListService: OrderListService) { }
}