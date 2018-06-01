import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductObject } from '../product/shared/product-object.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() order:ProductObject;
  @Input() cantidad: Number;
  constructor() {
      
   }
  ngOnInit() { 
    this.order.name="coca";
    this.order.category="Bebida Fria";
    this.order.price=5;
    this.order.detail="Detalles";
    this.order.image="coca";
  }

}