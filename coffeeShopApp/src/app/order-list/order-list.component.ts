import { Component } from '@angular/core';
import { OrderListService } from './order-list.service';
import { Product } from '../product/product.model';
import { DialogConfirmOrderComponent } from '../dialog-confirm-order/dialog-confirm-order.component';

import {Observable} from 'rxjs';
import { error } from 'util';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: "order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.css"]
})
export class OrderListComponent {
  products: Product[];

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.orderListService.getProducts().subscribe(
      data => {
        this.products = data;
      },
      err => console.error(err),
      () => console.log("done loading products")
    );
  }

  calculateTotalAmount(): number {
    console.log(this.orderListService.calculateTotalAmount());
    return this.orderListService.calculateTotalAmount();
  }

  submitOrder(): void {
    if (this.products.length > 0) {
      this.orderListService
        .submitOrder()
        .subscribe(
          data => console.log(data),
          error => console.log("An error has ocurred!")
        );
    }
  }

  openDialog(): void {
    if(this.products.length>0){
      let dialogRef = this.dialog.open(DialogConfirmOrderComponent, {
        width: '250px',
        data: { message: "Esta seguro que desea registrar su pedido?"}
      });
    }

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;//call to service
    // });
  }

  constructor(private orderListService: OrderListService, public dialog: MatDialog) {}
}