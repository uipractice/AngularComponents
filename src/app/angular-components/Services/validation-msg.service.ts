import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

@Injectable()
export class ValidationMsgService {


constructor(private http: HttpClient) { }

  private errorMessages : any = {
    'firstname-required-msg' : 'Firstname is a required field',
    'firstname-minlength-msg' : 'Firstname must have 8 characters',
    'firstname-maxlength-msg' : 'Firstname can have maximum 30 characters',

    'lastname-required-msg' : 'Lastname is a required field',
    'lastname-minlength-msg' : 'Lastname must have 8 characters',
    'lastname-maxlength-msg' : 'Lastname can have maximum 30 characters',

    'email-required-msg': 'Email is a required field',
    'email-email-msg': 'Email is not in valid format'
};

    public getValidationMsg(validationId: string): string {
        return this.errorMessages[validationId];
    }


    public getData() {
      return this.http.get('https://jsonplaceholder.typicode.com/comments');
    }



}
