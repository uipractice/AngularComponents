export const Code = {
    html: {
        content: `
  <div fxLayout="row" fxLayoutGap="15px" >
  <button mat-raised-button (click)="showAlert()">Alert Dialog</button>
  <button mat-raised-button color="warn" (click)="showConfirmDialog()">Confirm Dialog</button>
  </div>

  <!-- Alert Dialog Component Code-->
  <table class="tableClass"> 
  <tr mat-dialog-title><mat-icon > info </mat-icon> 
  <label class="titleClass">{{title}}</label>
  </tr>
  <tr> 
  <td [ngStyle]="{'text-align': alignLeft == true ? 'left' : 'center','padding-left':alignLeft == true ?'10px':'0px' }" >
  <mat-dialog-content>
  {{description}}
  </mat-dialog-content>
  </td>
  </tr>
  <tr fxLayoutAlign="center">
  <mat-dialog-actions >
  <button mat-button mat-primary  (click)="close()">Close</button>
  </mat-dialog-actions>
  </tr>
  </table>

  <!-- Confirm Dialog Component Code-->
  <table class="tableClass"> 
  <tr mat-dialog-title><mat-icon > warning </mat-icon> 
  <label class="titleClass">{{title}}</labe
  </tr>
  <tr> 
  <td [ngStyle]="{'text-align': alignLeft == true ? 'left' : 'center','padding-left':alignLeft == true ?'10px':'0px' }" >
  <mat-dialog-content>
  {{description}}
  </mat-dialog-content>
  </td>
  </tr>    
  <tr>
  <mat-dialog-actions fxLayoutAlign="center" fxLayoutGap="15px">
  <button mat-stroked-button color="primary" (click)="dialogOK()" style="margin-left:85px">OK</button>
  <button mat-stroked-button (click)="dialogCancel()">Cancel</button>      
  </mat-dialog-actions>
  </tr>
  </table>


    `,
        language: 'html'
        },
    ts: {
        content: `
  import { Component, OnInit } from '@angular/core';
  import { AlertMessageService } from 'src/app/e-shared/alert-message.service';

  @Component({
  selector: 'app-alert-example',
  templateUrl: './alert-example.component.html',
  styleUrls: ['./alert-example.component.scss']
  })
  export class AlertExampleComponent implements OnInit {
  constructor(private alertService: AlertMessageService) { }

  ngOnInit(): void {
  }
  showAlert() {
  this.alertService.openAlertDialog("Welcome to Angular components", "Alert Component", "check_circle", false);
  }

  showConfirmDialog() {
  const userResponse = this.alertService.openConfirmDialog("Are you sure you want to delete this record?", "help_outline", false);
  userResponse.then((value) => {
  if (value == "ok") {
  this.alertService.openAlertDialog("Deleted Sucessfully", "Alert Component", "check_circle", false);
  }
  });
  }

  }


          /** Alert dialog ts code **/

  import { Component, OnInit, Inject } from '@angular/core';
  import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

  @Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
  })
  export class AlertDialogComponent implements OnInit {

  icon: string;
  title: string;
  description: string;
  messageText: string = 'Show ';
  messageFromOtherScreen: string;
  alignLeft: boolean;
  constructor(
  private dialogRef: MatDialogRef<AlertDialogComponent>,
  @Inject(MAT_DIALOG_DATA) data) {
  this.icon = data.Icon;
  this.title = data.title;
  this.description = data.description;
  this.alignLeft = data.alignLeft;
  }

  ngOnInit() {
  }

  close() {
  this.dialogRef.close();
  }
  }
      
      /** Alert dialog ts code **/
  import { Component, OnInit, Inject } from '@angular/core';
  import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
  import { Injectable } from '@angular/core';

  @Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
  })
  export class ConfirmDialogComponent implements OnInit {

  title: string;
  description: string;
  icon: string;
  alignLeft: boolean;
  constructor(
  private dialogRef: MatDialogRef<ConfirmDialogComponent>,
  @Inject(MAT_DIALOG_DATA) data) {
  this.title = data.title;
  this.icon = data.icon;
  this.description = data.description;
  this.alignLeft = data.alignLeft;
  }

  ngOnInit() {

  });

  document.getElementById("descID").innerHTML = this.description;
  }

  dialogCancel() {
  this.dialogRef.close("cancel");
  }

  dialogOK() {
  this.dialogRef.close("ok");
  }
  }

      //**Alert Message Service**//

      
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


            
        `,
        language: 'javascript'
        },
    css: {
        content: `
          /** No CSS for this example */
            `,
        language: 'css'
        }
    }