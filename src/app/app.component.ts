import { Component, ComponentFactoryResolver } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ComponentType } from '@angular/cdk/portal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dialogRef: MatDialogRef<ModalContentComponent>;

  constructor(private dialog: MatDialog) {

  }

  open() {
    this.dialogRef = this.dialog.open(ModalContentComponent, { hasBackdrop: true });
    this.dialogRef.componentInstance.closeModal.subscribe((evt) => console.log(evt));
    this.dialogRef.componentInstance.saveData.subscribe((evt) => console.log(evt));
  }

  close() {
    this.dialogRef.close();
  }




}
