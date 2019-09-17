import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalDataUserSubmitComponent } from './modal-data-user-submit/modal-data-user-submit.component';
import { ModalDataUserDeleteComponent } from './modal-data-user-delete/modal-data-user-delete.component';
import { ModalDataUserConfirmationComponent } from './modal-data-user-confirmation/modal-data-user-confirmation.component';
import { ModalDataAddComponent } from './modal-data-add/modal-data-add.component';
import { ModalDataEditComponent } from './modal-data-edit/modal-data-edit.component';


@Component({
  selector: 'components-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {

  constructor(public dialog: MatDialog) {}

  openDialogUserSubmit(): void {
    const dialogRef = this.dialog.open(ModalDataUserSubmitComponent, {
      width: '320px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogUserDelete(): void {
    const dialogRef = this.dialog.open(ModalDataUserDeleteComponent, {
      width: '320px',
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogUserConfirmation(): void {
    const dialogRef = this.dialog.open(ModalDataUserConfirmationComponent, {
      width: '320px',
      height: '308px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogAdd(): void {
    const dialogRef = this.dialog.open(ModalDataAddComponent, {
      width: '400px',
      height: '320px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogEdit(): void {
    const dialogRef = this.dialog.open(ModalDataEditComponent, {
      width: '400px',
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
