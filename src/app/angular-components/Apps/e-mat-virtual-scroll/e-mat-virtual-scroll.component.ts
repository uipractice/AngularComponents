import { Component, OnInit } from '@angular/core';
import { Code } from './code';
import { EShareDataService } from '../../../e-shared/e-sharedata.service';
@Component({
  selector: 'e-mat-image-gallery',
  templateUrl: './e-mat-virtual-scroll.component.html',
  styleUrls: ['./e-mat-virtual-scroll.component.scss'],

})
export class EMatVirtualScrollComponent implements OnInit {
  code: any;
  user: any[] = [
    { username: 'John Smith', empId: 'John@110', emailId: 'Smith110@gmail.com' },
    { username: 'Aaron Hank', empId: 'hank@111', emailId: 'Hank111@gmail.com' },
    { username: 'Abbey Edward', empId: 'Edward@112', emailId: 'Edward112@gmail.com' },
    { username: 'Abel Reuben', empId: 'Reuben@113', emailId: 'Reuben113@gmail.com' },
    { username: 'Abelson Hal', empId: 'Hal@114', emailId: 'Hal114@gmail.com' },
    { username: 'Abourezk James', empId: 'James@115', emailId: 'James115@gmail.com' },
    { username: 'Abrams Creighton', empId: 'Creighton@116', emailId: 'Creighton116@gmail.com' },
    { username: 'Ace Jane', empId: 'Jane@117', emailId: 'Jane117@gmail.com' },
    { username: 'Adams Abigail', empId: 'Abigail@118', emailId: 'Abigail118@gmail.com' },
    { username: 'Adams Douglas', empId: 'Douglas@119', emailId: 'Douglas119@gmail.com' },
  ];
  displayRecords: any[] = [];
  numbers: number[] = [];
  constructor(public eShareDataService: EShareDataService) {
  }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
    this.generatingRec();
  }
  generatingRec() {
    for (let i = 0; i <= this.user.length - 1; i++) {
      Array.prototype.push.apply(this.displayRecords, this.user)
    }
  }
}
