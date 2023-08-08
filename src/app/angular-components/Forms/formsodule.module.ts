import { ESharedModule } from 'src/app/e-shared';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EMatReactiveFormsComponent, EMatTemplateDrivenFormsComponent } from '../basic-components';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//import {MatInputModule} from '@angular/material/input'; 

@NgModule({
    imports: [ESharedModule,MatFormFieldModule,MatInputModule,FormsModule,ReactiveFormsModule],
    declarations: [
      EMatReactiveFormsComponent,
      EMatTemplateDrivenFormsComponent,FeedbackFormComponent
      
    ],
    exports: [
      EMatReactiveFormsComponent,
      EMatTemplateDrivenFormsComponent
    ],
})

export class FormsBlockModule {

}