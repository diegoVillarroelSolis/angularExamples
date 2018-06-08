import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { DialogConfirmLogoutComponent } from '../dialog-confim-logout/dialog-confim-logout.component';
import { OrderListService } from '../order-list/order-list.service';

@Component({
  selector: 'dialog-confirm-order',
  templateUrl: 'dialog-confirm-order.component.html',
  styleUrls: ['dialog-confirm-order.component.css'],
})
export class DialogConfirmOrderComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private orderListService: OrderListService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openDialog(): void {
      let dialogRef = this.dialog.open(DialogConfirmLogoutComponent, {
        width: '250px',
        data: { confirm: "Esta seguro que desea registrar su pedido?"}
      });
      console.log('The dialog was confirmed');
      let x = this.orderListService.submitOrder();
      console.log(x);

          this.orderListService
            .submitOrder()
            .subscribe(
              data => console.log(data, "Succesfull request"),
              error => console.log(error)
            );
      this.orderListService.clearProducts();//call to service

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;//call to service
    // });
  }

}
