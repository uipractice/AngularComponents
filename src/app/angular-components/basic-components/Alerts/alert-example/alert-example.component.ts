import { Component, OnInit } from '@angular/core';
import { Code } from './code';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { AlertMessageService } from 'src/app/e-shared/alert-message.service';

@Component({
  selector: 'app-alert-example',
  templateUrl: './alert-example.component.html',
  styleUrls: ['./alert-example.component.scss']
})
export class AlertExampleComponent implements OnInit {
  code: any;
  constructor(private alertService: AlertMessageService, public eShareDataService: EShareDataService) { }

  ngOnInit(): void {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
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
