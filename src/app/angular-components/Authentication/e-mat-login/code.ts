export const Code = {
html: {
content: `<form class="example-form" [formGroup]="loginForm">
<table class="example-full-width" cellspacing="0" style="width:30%;">
<tr>
<td>
<mat-form-field class="example-full-width" style="width:100%;">
<input matInput placeholder="User Name" formControlName="username" name="username" >
</mat-form-field>
<mat-error>
<span *ngIf="!loginForm.get('username').valid && loginForm.get('username').touched"> <p>User Name Required</p></span>
</mat-error>
</td>
</tr>
<tr>
<td>
<mat-form-field class="example-full-width" style="width:100%;">
<input matInput placeholder="Password" formControlName="password" type="password" name="password">
</mat-form-field>
<mat-error>
<span *ngIf="!loginForm.get('password').valid && loginForm.get('password').touched"> <p>Password Required</p></span>
</mat-error>
</td>
</tr>
<tr>
<td colspan="2" class="content-center">
<button  mat-raised-button color="primary" [disabled]="!loginForm.valid" type="submit" (click)="loginFormVal(loginForm.value);">
Login
</button>
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
selector: 'app-e-mat-login',
templateUrl: './e-mat-login.component.html',
styleUrls: ['./e-mat-login.component.scss']
})
export class EMatLoginComponent {
username: string;
password: string;
loginForm:FormGroup;
code:any;
constructor(private fb: FormBuilder,) {

this.loginForm = fb.group({
'username':[null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])],
'password':[null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(12)])]
});
}
ngOnInit() { }
loginFormVal(data){ 
// do something Here
}
}
`,
language: 'javascript'
},
css: {
content: `.example-form {
min-width: 150px;
max-width: 500px;
width: 100%;
}

.example-full-width {
width: 100%;
}

.example-card {
max-width: 400px;
padding-left: 200 px
}
`,
language: 'css'
},
bootstrapHtml: {
content: `<div class="container login-container">
<div class="row">
<div class="col-md-12 login-form-1">
<form  [formGroup]="loginFormBoots">
<div class="form-group">
<label for="exampleInputEmail1">User Name</label>
<input type="text" class="form-control" formControlName="username" aria-describedby="emailHelp" placeholder="Enter User Name" required>
</div>
<div class="form-group">
<label for="exampleInputPassword1">Password</label>
<input type="password" class="form-control" formControlName="password" placeholder="Password" required><br/>
<label class="txt-grey">Password sample format : John@143</label>
</div>
<button type="submit" [disabled]="!loginFormBoots.valid " [ngClass]="!loginFormBoots.valid ? 'btn btn-disabled' : 'btn btn-primary'"type="submit">Login</button><br/>
<a class="ForgetPwd" routerLink="/dashboard">Forgot Password ?</a>
</form>
</div>
</div>
</div>
`,
language: 'HTML'
},
bootstrapTS: {
content: `import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
@Component({
selector: 'app-e-mat-login',
templateUrl: './e-mat-login.component.html',
styleUrls: ['./e-mat-login.component.scss']
})
export class EMatLoginComponent {
username: string;
password: string;
loginFormBoots:FormGroup;
userFormVal;
constructor(private fb: FormBuilder) {
this.loginFormBoots = fb.group({
'username':['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$'),Validators.minLength(4), Validators.maxLength(16)])],
'password':['', Validators.compose([Validators.required,Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}'), Validators.minLength(8), Validators.maxLength(16)])]
});  
}
ngOnInit() {}
}
`,
language: 'TS'
},
bootstrapCSS: {
content: `.example-full-width{
width:30%;
}
.login-container{
margin: 0px;
margin-top: 1%;
margin-bottom: 1%;

max-width: 30% !important;
}
.login-form-1 h3{
text-align: center;
color: #333;
}
.login-container form{
padding: 0px;
padding-top:15px;
}
.btnSubmit{
width: 50%;
border-radius: 1rem;
padding: 1.5%;
border: none;
cursor: pointer;
}
.login-form-1 .ForgetPwd{
color: #0062cc;
font-weight: 600;
text-decoration: none;
}
.txt-grey{
color:grey;
}
`,
language: 'CSS'
}
}