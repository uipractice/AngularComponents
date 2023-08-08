import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
export interface Food {
  value: number;
  foodType: string;
}
export interface Item {
  value: number;
  foodType: number;
  foodItem: string;
}
@Component({
  selector: 'app-e-mat-custom-dropdown',
  templateUrl: './e-mat-custom-dropdown.component.html',
  styleUrls: ['./e-mat-custom-dropdown.component.scss']
})
export class EMatCustomDropdownComponent implements OnInit {
  foods: Food[] = [
    {value: 1, foodType: 'Indian'},
    {value: 2, foodType: 'Mexican'},
    {value: 3, foodType: 'Italian'},
   
  ];
  itemsArray: Item[]=[
    {value: 1, foodType: 1, foodItem: 'Biryani'},
    {value: 2, foodType: 1, foodItem: 'Pulav'},
    {value: 3, foodType: 1, foodItem: 'Samosa'},
    {value: 4, foodType: 2, foodItem: 'Momos'},
    {value: 5, foodType: 2, foodItem: 'veg rolls'},
    {value: 6, foodType: 2, foodItem: 'chicke rolls'},
    {value: 7, foodType: 3, foodItem: 'soup'},
  ];
  items:Item[]=this.itemsArray;

  code:any;
  constructor(public eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }
  
  onFoodTypeChanges(event : any){
    console.log(event.value);
    this.items=this.itemsArray;
    let tempItems = this.items.filter(item=> item.foodType == event.value);
    this.items =tempItems;
  }

}
