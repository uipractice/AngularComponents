import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../basic-components/e-mat-crud-table/car';

@Injectable()
export class CarService {

    constructor(private http: HttpClient) {}

    getCarsSmall() {

        return this.http.get<any>('assets/cars-small.json')
                    .toPromise()
                    .then(res => <Car[]> res.data)
                    .then(data =>  data );
    }
}


