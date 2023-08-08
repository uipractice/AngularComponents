export const Code = {
  html: {
    content: `<cdk-virtual-scroll-viewport itemSize="50" style="height:175px; display: block; overflow: auto;">
<table style="width:100%;">
<tr>
<th width="10%">S. No.</th>
<th width="30%">User Name</th>
<th width="30%">Emp ID</th>
<th width="30%">User Email ID</th>
</tr>
</table>
<div style="width:100%; height:auto; padding-bottom:5px;">
<table style="width:100%;">
<tbody style="height:200px;">
<tr *cdkVirtualFor="let n of displayRecords; let i=index">
<th width="10%">{{i+1}}</th>
<td width="30%">{{n.username}}</td>
<td width="30%">{{n.empId}}</td>
<td width="30%">{{n.emailId}}</td>
<tr>
</tbody>
</table>
</div>
</cdk-virtual-scroll-viewport>

`,
    language: 'html'
  },
  ts: {
    content: `import { Component, OnInit } from '@angular/core';
@Component({
selector: 'e-mat-Virtual-scroll',
templateUrl: './e-mat-virtual-scroll.component.html',
styleUrls: ['./e-mat-virtual-scroll.component.scss'],
})
export class EMatVirtualScrollComponent implements OnInit {
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
constructor(private eShareDataService: EShareDataService) {
}
ngOnInit() {     
this.generatingRec();
}
generatingRec() {
/* Mock userdata generated */
for (let i = 0; i <= this.user.length - 1; i++) {
Array.prototype.push.apply(this.displayRecords, this.user)
}
}
}
`,
    language: 'javascript'
  },
  css: {
    content: `table, td, th {  
border: 1px solid #ddd;
text-align: left;
}
table {
border-collapse: collapse;
width: 100%;
}
th, td {
padding: 15px;
}

`,
    language: 'css'
  },
  bootstrapHtml: {
    content: `<cdk-virtual-scroll-viewport itemSize="50" style="height:175px; display: block; overflow: auto;">
<table style="width:100%;">
<tr>
<th width="10%">S. No.</th>
<th width="30%">User Name</th>
<th width="30%">Emp ID</th>
<th width="30%">User Email ID</th>
</tr>
</table>
<div style="width:100%; height:auto; padding-bottom:5px;">
<table style="width:100%;">
<tbody style="height:200px;">
<tr *cdkVirtualFor="let n of displayRecords; let i=index">
<th width="10%">{{i+1}}</th>
<td width="30%">{{n.username}}</td>
<td width="30%">{{n.empId}}</td>
<td width="30%">{{n.emailId}}</td>
<tr>
</tbody>
</table>
</div>
</cdk-virtual-scroll-viewport>`,
    language: 'HTML'
  },
  bootstrapTS: {
    content: ` import { Component, OnInit } from '@angular/core';
@Component({
selector: 'e-mat-Virtual-scroll',
templateUrl: './e-mat-virtual-scroll.component.html',
styleUrls: ['./e-mat-virtual-scroll.component.scss'],
})
export class EMatVirtualScrollComponent implements OnInit {
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
constructor(private eShareDataService: EShareDataService) {
}
ngOnInit() {     
this.generatingRec();
}
generatingRec() {
/* Mock userdata generated */
for (let i = 0; i <= this.user.length - 1; i++) {
Array.prototype.push.apply(this.displayRecords, this.user)
}
}
}`,
    language: 'TS'
  },
  bootstrapCSS: {
    content: `table, td, th {  
border: 1px solid #ddd;
text-align: left;
}
table {
border-collapse: collapse;
width: 100%;
}
th, td {
padding: 15px;
}`,
    language: 'CSS'
  }
}
