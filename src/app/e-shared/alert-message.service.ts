import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AlertDialogComponent } from '../angular-components/basic-components/Alerts/alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from '../angular-components/basic-components/Alerts/confirm-dialog/confirm-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {
  public errorMessage: string = "";
  public confirmDialogResponse: string = "Uninitialized";

  constructor(private dialog: MatDialog) { }

  // Alert Dialog Start
  public openAlertDialog(strMessage: string, strTitle: string, strIcon: string, alignLeft: boolean = true,): Promise<String> {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      Icon: strIcon,
      title: strTitle,
      description: strMessage,
      alignLeft: alignLeft
    };
    const dialogRef = this.dialog.open(AlertDialogComponent, dialogConfig);
    return dialogRef.afterClosed().toPromise();

  }
  // Alert Dialog End

  // Confirm Dialog Start
  public openConfirmDialog(strMessage: string, icon: string, alignLeft: boolean = true): Promise<String> {

    const dialogConfig = new MatDialogConfig();
    this.confirmDialogResponse = "Uninitialized";
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: "Confirm",
      description: strMessage,
      icon: icon,
      alignLeft: alignLeft
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);
    return dialogRef.afterClosed().toPromise();
  }

  public openOkAlertDialog(strMessage: string, strTitle: string, strIcon: string, alignLeft: boolean = true): Promise<String> {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      Icon: strIcon,
      title: strTitle,
      description: strMessage,
      alignLeft: alignLeft
    };

    const dialogRef = this.dialog.open(AlertDialogComponent, dialogConfig);

    return dialogRef.afterClosed().toPromise();
  }
  // Alerts Confirm Dialog

}
