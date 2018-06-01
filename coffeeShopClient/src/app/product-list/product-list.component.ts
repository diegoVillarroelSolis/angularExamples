import { Component, OnInit, Input } from '@angular/core';

import {ProductObject} from '../product/shared/product-object.model';
import {ProductService} from '../product/shared/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ ProductService ]

})
export class ProductListComponent implements OnInit {
  products: ProductObject[];
  @Input() selectedCategory: number;
  @Input() session: boolean;
  @Input() nameCategory: string;
  selectedProduct: ProductObject;
  displayDialog: boolean;
  
  constructor(private productService: ProductService) { 
  }
  
  ngOnInit() {
    this.getNameCategory(this.selectedCategory);
    this.productService.getProduct(this.selectedCategory).then(products => this.products = products);
  }

  selectProduct(event: Event , product: ProductObject) {
      console.log(product);
      this.selectedProduct = product;
       console.log(this.selectedProduct.name);
      this.displayDialog = true;
  }
  getNameCategory(category:number){
    if(category==1){
        this.nameCategory = "Jugos";
    }else if(category==2){
        this.nameCategory ="Bebidas Frias";
        
    }else if(category==3){
        this.nameCategory ="Bebidas Calientes";
        
    }else if(category==4){
        this.nameCategory = "Sandwich";
        
    }else{
         this.nameCategory = "Ensalada de frutas";
    }

  }
  
}