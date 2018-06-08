import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'dialog-confirm-logout',
  templateUrl: 'dialog-confim-logout.component.html',
  styleUrls: ['dialog-confim-logout.component.css'],
})
export class DialogConfirmLogoutComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmLogoutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}