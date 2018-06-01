import { Component, OnInit, Input } from '@angular/core';
import { ProductObject } from './shared/product-object.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:ProductObject;
  constructor() { }
  ngOnInit() { }
}