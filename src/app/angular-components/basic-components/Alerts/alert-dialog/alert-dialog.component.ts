import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'app-alert-dialog',
    templateUrl: './alert-dialog.component.html',
    styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {

   // form: FormGroup;
    icon: string;
    title: string;
    description: string;
    messageText: string = 'Show ';
    alignLeft: boolean;
    constructor(
        private dialogRef: MatDialogRef<AlertDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data: any) {
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

