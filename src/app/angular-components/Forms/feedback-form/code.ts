export const Code = {
html: {
content: `<h2>Feedback Form!</h2>
<div [formGroup]="formGroup">
<div>
<mat-form-field>
<input matInput placeholder="Enter your email" [formControl]="emailField" required>
<mat-error *ngIf="emailField.invalid">{{ getErrorMessage(emailField) }}</mat-error>
</mat-form-field>
</div>
<div>
<mat-form-field class="half-width">
<textarea matInput placeholder="Enter your feedback" [formControl]="feedbackField" cdkTextareaAutosize required></textarea>
<mat-error *ngIf="feedbackField.invalid">{{ getErrorMessage(feedbackField) }}</mat-error>
</mat-form-field>
</div>
<button mat-raised-button color="primary" (click)="onSubmit()" [disabled]="formGroup.invalid">Submit Feedback</button>
</div>
`,
language: 'html'
},
ts: {
content: `import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';

@Component({
selector: 'app-feedback-form',
templateUrl: './feedback-form.component.html',
styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {

name = 'Feedback';
formGroup: FormGroup
code:any;
constructor(private eShareDataService : EShareDataService) {
this.formGroup = new FormGroup({
emailField: new FormControl('', [Validators.required, Validators.email]),
feedbackField: new FormControl('', [
Validators.required, 
Validators.minLength(25), 
Validators.maxLength(3000)
])
})
}

getErrorMessage(control: AbstractControl): string {
// Don't say anything if control doesn't exist, or is valid
if (!control || control.valid) {
return '';
}

// Required always comes first
if (control.hasError('required')) {
return "Cannot be empty";
}
if (control.hasError('email')) {
return "Must be a valid email";
}
if (control.hasError('minlength')) {
const limit = control.getError('minlength').requiredLength;
return \`Must be at least $ {limit} characters\`;
}
if (control.hasError('minlength')) {
const limit = control.getError('maxlength').requiredLength;
return \`Must be no more than $ {limit} characters\`;
}

// Default general error message
return "Invalid input";
}

onSubmit() {
this.formGroup.reset();
alert('Thank you! Feedback submitted successfully');
}

get emailField(): AbstractControl {
return this.formGroup.get('emailField');
}

get feedbackField(): AbstractControl {
return this.formGroup.get('feedbackField');
}

ngOnInit() {
  this.code = Code;
  this.eShareDataService.pushCode(this.code);

}

}



`,
language: 'javascript'
},
css: {
content: `.half-width {
width: 50%;
}
`,
language: 'css'
},
bootstrapHtml:{
content:`
<!-- There is no HTML code for Bootstrap -->
`,
language: 'HTML'
},
bootstrapTS:{
content:`
/* There is no TS code for Bootstrap */
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
