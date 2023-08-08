import { NgModule } from '@angular/core';
import { ESharedModule } from 'src/app/e-shared';
import { ReactiveFormsModule } from '@angular/forms';
import { EMatForgotComponent, EMatRegisterComponent, EMatLoginComponent } from '../basic-components';

@NgModule({
    imports: [ESharedModule, ReactiveFormsModule],
    declarations: [
    EMatForgotComponent,
    EMatRegisterComponent,
    EMatLoginComponent,

     
    ],
    exports: [
    EMatForgotComponent,    
    EMatRegisterComponent,
    EMatLoginComponent,


    ],
})

export class AuthenticationModule {

}