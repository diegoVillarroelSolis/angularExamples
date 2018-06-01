import { Component } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Product } from '../product/product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  products : Product[];

  ngOnInit() {
    this.getProducts();
  }

  getProducts() : void{
    this.productListService.getProducts().subscribe(
      data => { this.products = data },      
      err => console.error(err),
      () => console.log('done loading products')
    );
  }
 
  constructor(private productListService: ProductListService) { }
}