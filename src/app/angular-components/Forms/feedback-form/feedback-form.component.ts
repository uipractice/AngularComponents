import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators , FormBuilder} from '@angular/forms';
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
constructor(private eShareDataService : EShareDataService, private fb: FormBuilder) {
this.formGroup =this.fb.group({
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
return `Must be at least ${limit} characters`;
}
if (control.hasError('minlength')) {
const limit = control.getError('maxlength').requiredLength;
return `Must be no more than ${limit} characters`;
}

// Default general error message
return "Invalid input";
}

onSubmit() {
this.formGroup.reset();
alert('Thank you! Feedback submitted successfully');
}

get emailField(): AbstractControl | any {
return this.formGroup.get('emailField');
}

get feedbackField(): AbstractControl | any {
return this.formGroup.get('feedbackField');
}

ngOnInit() {
  this.code = Code;
  this.eShareDataService.pushCode(this.code);

}

}
