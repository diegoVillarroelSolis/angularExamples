import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'dialog-confirm-order',
  templateUrl: 'dialog-confirm-order.component.html',
  styleUrls: ['dialog-confirm-order.component.css'],
})
export class DialogConfirmOrderComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
