export const Code = {
html: {
content: `<form class="example-form" [formGroup]="forgotForm">
<table class="example-full-width" cellspacing="0">
<tr>
<td>
<mat-form-field class="example-full-width">
<input matInput placeholder="New Password" formControlName="newpassword" name="fname" type="password">
</mat-form-field>
</td>
</tr>
<tr>
<td><mat-form-field class="example-full-width">
<input matInput placeholder="Confirm Password" formControlName="confrmpassword" type="password" name="lname">
</mat-form-field></td>
</tr>
<tr>
<td colspan="2" class="content-center">
<button  mat-raised-button color="primary" [disabled]="!forgotForm.valid" type="submit" (click)="forgotFormVal(forgotForm.value);">Save</button>
</td>
</tr>
</table>
</form>`,
language: 'html'
},
ts: {
content: `import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
@Component({
selector: 'e-mat-forgot',
templateUrl: './e-mat-forgot.component.html',
styleUrls: ['./e-mat-forgot.component.scss']
})
export class EMatForgotComponent{
forgotForm:FormGroup;
constructor(private fb: FormBuilder) {
this.forgotForm = fb.group({
'newpassword':[null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])],
'confrmpassword':[null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])]
});
}
ngOnInit() { }
forgotFormVal(data){
if(data.newpassword === data.confrmpassword){
alert('Password Saved Successfully');
}else{
alert('Please check once New Password and Confirm Password should be same');
}
}
}`,
language: 'javascript'
},
css: {
content: `
/** No CSS for this example */
`,
language: 'css'
},
bootstrapHtml:{
content:`<form class="example-form" [formGroup]="forgotFormBootstrap" *ngIf="eShareDataService.bootstrapCode">
<div class="form-group">
<input type="text" class="form-control" formControlName="newpassword" aria-describedby="emailHelp" placeholder="New Password" required>
</div>
<div class="form-group">
<input type="password" class="form-control" formControlName="confrmpassword" placeholder="Confirm Password" required><br/>
<label class="txt-grey">Password sample format : John@143</label>
</div>
<button type="submit" [disabled]="!forgotFormBootstrap.valid" (click)="forgotFormVal(forgotFormBootstrap.value)" [ngClass]="!forgotFormBootstrap.valid ? 'btn btn-primary disabled' : 'btn btn-primary'"type="submit">Save</button>
</form>
`,
language: 'HTML'
},
bootstrapTS:{
content:`import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
@Component({
selector: 'e-mat-forgot',
templateUrl: './e-mat-forgot.component.html',
styleUrls: ['./e-mat-forgot.component.scss']
})
export class EMatForgotComponent{
forgotFormBootstrap:FormGroup;
constructor(private fb: FormBuilder) {
this.forgotFormBootstrap = fb.group({
'newpassword':[null, Validators.compose([Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}'), Validators.minLength(8), Validators.maxLength(16)])],
'confrmpassword':[null, Validators.compose([Validators.required,Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}') ,Validators.minLength(8), Validators.maxLength(16)])]
});
}
ngOnInit() { }
forgotFormVal(data){
if(data.newpassword === data.confrmpassword){
alert('Password Saved Successfully');
}else{
alert('Please check once New Password and Confirm Password should be same');
}
}
}

`,
language: 'TS'
},
bootstrapCSS:{
content:`.form-group{
width:30%;
}
`,
language: 'CSS'
}
}
