import { Component, Inject } from '@angular/core';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'e-mat-dialog',
  templateUrl: './e-mat-dialog.component.html',
  styleUrls: ['./e-mat-dialog.component.scss']
})

export class EMatDialogComponent {

  animal: string ="";
  name: string= "";
  code:any;
  constructor(public dialog: MatDialog, public eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }


  openDialog(): void {
    let dialogRef = this.dialog.open(EMatDialogPopupComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'e-mat-dialog-popup.component',
  templateUrl: 'e-mat-dialog-popup.component.html',
  styles:['.mat-form-field{width:100% !important}']
})
export class EMatDialogPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<EMatDialogPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
