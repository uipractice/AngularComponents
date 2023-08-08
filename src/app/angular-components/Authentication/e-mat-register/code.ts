export const Code = {
html: {
content: `<form class="example-form" [formGroup]="registerForm" (onSubmit)="registerFormVal(registerForm.value);">
<table cellspacing="0">
<tr>
<td>
<mat-form-field>
<input matInput placeholder="First Name *" formControlName="fname" name="fname">
<mat-error>
<p>First Name Required</p>
</mat-error>
</mat-form-field>
</td>
</tr>
<tr>
<td><mat-form-field>
<input matInput placeholder="Last Name" formControlName="lname" type="text" name="lname">
</mat-form-field></td>
</tr>
<tr>
<tr>
<td><mat-form-field>
<input matInput placeholder="Email" formControlName="email" type="email" name="email">
<mat-error>
<p>Email Required</p>
</mat-error>
</mat-form-field></td>
</tr>
<tr>
<td><mat-form-field>
<input matInput placeholder="Phone Number" formControlName="phone" type="text" name="phone">
<mat-error>
<p>Phone Number Required</p>
</mat-error>
</mat-form-field></td>
</tr>
<tr>
<td><mat-form-field>
<input matInput placeholder="Password" formControlName="password" type="password" name="password">
<mat-error>
<p>Password must be at least 8 characters</p>
</mat-error>
</mat-form-field></td>
</tr>
<tr>
<td><mat-form-field>
<input matInput placeholder="Confirm Password" formControlName="cnfrmpassword" type="password" name="ConfirmPassword">
<mat-error>
<p>Passwords must match</p>
</mat-error>
</mat-form-field></td>
</tr>
<tr>
<td colspan="2" class="content-center">
<button  mat-raised-button color="primary" [disabled]="!registerForm.valid" type="submit" (click)="registerFormVal(registerForm.value);">Register</button>
</td>
</tr>
</table>
</form>
`,
language: 'html'
},
ts: {
content: `import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
@Component({
selector: 'app-e-mat-register',
templateUrl: './e-mat-register.component.html',
styleUrls: ['./e-mat-register.component.scss']
})
export class EMatRegisterComponent{
registerForm:FormGroup;
constructor(private fb: FormBuilder) {
this.registerForm = fb.group({
'fname': [null, Validators.required],
'lname': [null],
'email': [null, Validators.compose([Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
'phone': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern("[0-9]{10}")])],
'password':[null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])],
'cnfrmpassword':[null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])]
});
registerFormVal(data){
if(data.password === data.cnfrmpassword){
alert('Registered Successfully');
}else{
alert('Please check once Password and Confirm Password should be same');
}
}
}
`,
language: 'javascript'
},
css: {
content: `
/** No CSS for this example */
`,
language: 'css'
},
bootstrapHtml:{
content:`<h1 class="well">Registration Form</h1>
<div class="col-lg-12 well">
<div class="row">
<form [formGroup]="registerFormBootstrap">
<div class="col-sm-12">
<div class="row">
<div class="col-sm-6 form-group">
<label>First Name</label>
<input type="text" placeholder="Enter First Name Here.." class="form-control" formControlName="fname" required>
<label class="notification">Minimum: Characters</label>
</div>
<div class="col-sm-6 form-group">
<label>Last Name</label>
<input type="text" placeholder="Enter Last Name Here.." class="form-control" formControlName="lname">
<label class="notification">Minimum: Characters</label>
</div>
</div>					
<div class="form-group">
<label>Email Address</label>
<input type="text" placeholder="Enter Email Address Here.." class="form-control" formControlName="email">
<label class="notification">Please maintain E-Mail format</label>
</div>	
<div class="form-group">
<label>Phone Number</label>
<input type="text" placeholder="Enter Phone Number Here.." class="form-control" formControlName="phone"  (keypress)="numberOnly($event)">
<label class="notification">Max: 11 Numbers</label>
</div>
<div class="form-group">
<label>Password</label>
<input type="password" placeholder="Password" class="form-control" formControlName="password">
<label class="notification">Min: 6 & Max: 16 Characters</label>
</div>
<div class="form-group">
<label>Confirm Password</label>
<input type="password" placeholder="Confirm Password" class="form-control" formControlName="cnfrmpassword">
<label class="notification">Should match with password</label>
</div>
<button type="button" class="btn btn-lg btn-info" [disabled]="!registerFormBootstrap.valid">Register</button>					
</div>
</form> 
</div>
</div>`,
language: 'HTML'
},
bootstrapTS:{
content:`import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
@Component({
selector: 'app-e-mat-register',
templateUrl: './e-mat-register.component.html',
styleUrls: ['./e-mat-register.component.scss']
})
export class EMatRegisterComponent{
registerFormBootstrap:FormGroup;
constructor(private fb: FormBuilder) {
this.registerFormBootstrap = fb.group({
'fname': [null, Validators.required],
'lname': [null, Validators.required],
'email': [null, Validators.compose([Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
'phone': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern("[0-9]{10}")])],
'password':[null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(16)])],
'cnfrmpassword':[null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(16)])]
});
}
ngOnInit() { }
numberOnly(event): boolean {
const charCode = (event.which) ? event.which : event.keyCode;
if (charCode > 31 && (charCode < 48 || charCode > 57)) {
return false;
}
return true;
}
}
`,
language: 'TS'
},
bootstrapCSS:{
content:`@media screen and (min-width: 1280px) {
.customeClass{
width:50%;
height:640px;
}
}
.notification{
color:#868686;
margin:0px;
padding:0px;
}
`,
language: 'CSS'
}
}
