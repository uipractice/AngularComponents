export const Code = {
html: {
content: `<h1 mat-dialog-title>Hi {{data.name}}</h1>
<div mat-dialog-content>
<p>What's your favorite animal?</p>
<mat-form-field>
<input matInput [(ngModel)]="data.animal">
</mat-form-field>
</div>
<div mat-dialog-actions>
<button mat-button (click)="onNoClick()">No Thanks</button>
<button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>
</div>
<ol>
<li>
<mat-form-field>
<input matInput [(ngModel)]="name" placeholder="What's your name?">
</mat-form-field>
</li>
<li>
<button mat-raised-button (click)="openDialog()">Pick one</button>
</li>
<li *ngIf="animal">
You chose:
<i>{{animal}}</i>
</li>
</ol>
`,
language: 'html'
},
ts: {
content: `import { NgModule, Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
selector: 'e-mat-dialog',
templateUrl: './e-mat-dialog.component.html',
styleUrls: ['./e-mat-dialog.component.scss']
})
export class EMatDialogComponent {
animal: string;
name: string;
constructor(public dialog: MatDialog) {}
openDialog(): void {
let dialogRef = this.dialog.open(EMatDialogPopupComponent, {
width: '250px',
data: { name: this.name, animal: this.animal }
});
dialogRef.afterClosed().subscribe(result => {
this.animal = result;
});
}
}
@Component({
selector: 'e-mat-dialog-popup.component',
templateUrl: 'e-mat-dialog-popup.component.html',
})
export class EMatDialogPopupComponent {
constructor(
public dialogRef: MatDialogRef<EMatDialogPopupComponent>,
@Inject(MAT_DIALOG_DATA) public data: any) { }
onNoClick(): void {
this.dialogRef.close();
}
}
`,
language: 'javascript'
},
css: {
content: `.divcontent{
display: flex;
justify-content: center;
}

.cardcontent{
width: 100%;
height: 100px;
margin: 5px;
}

.cardlayout{
display: flex;
flex-wrap: wrap;
width: 50%;
} 
`,
language: 'css'
},
bootstrapHtml:{
content:`<div class="container">
<!-- Trigger the modal with a button -->
<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
<div class="modal-dialog">
<!-- Modal content-->
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal">&times;</button>
<h4 class="modal-title">Modal Header</h4>
</div>
<div class="modal-body">
<p>Some text in the modal.</p>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>
</div>
`,
language: 'HTML'
},
bootstrapTS:{
content:` 
import { NgModule, Component, Inject } from '@angular/core';
@Component({
selector: 'e-mat-dialog',
templateUrl: './e-mat-dialog.component.html',
styleUrls: ['./e-mat-dialog.component.scss']
})
export class EMatDialogComponent {}
`,
language: 'TS'
},
bootstrapCSS:{
content:`
/* There is no CSS code for Bootstrap*/
`,
language: 'CSS'
}
}