import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

   // form: FormGroup;
    title: string;
    description: string;
    icon: string;
    alignLeft: boolean;
    constructor(
        private dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: any) {
        this.title = data.title;
        this.icon = data.icon;
        this.description = data.description;
        this.alignLeft = data.alignLeft;
    }

    ngOnInit() {
        // form: FormGroup = new FormGroup({
        //     description: new FormControl([this.description, []]),
        //     title: new FormControl([this.title, []]),
        //     icon: new FormControl([this.icon, []]),

        // });

        //document.getElementById("descID").innerHTML = this.description;
    }

    dialogCancel() {
        this.dialogRef.close("cancel");
    }

    dialogOK() {
        this.dialogRef.close("ok");
    }
}
