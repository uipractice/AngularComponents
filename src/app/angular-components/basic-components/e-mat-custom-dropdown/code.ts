export const Code = {
    html: {
      content: ` 
  <div fxLayout.gt-lg="row" fxLayoutGap="15px">
  <mat-form-field>
  <mat-select placeholder="Favorite food" (selectionChange)="onFoodTypeChanges($event)">
  <mat-option *ngFor="let food of foods" [value]="food.value">
  {{food.foodType}}
  </mat-option>
  </mat-select>
  </mat-form-field>
  <mat-form-field>
  <mat-select placeholder="Favorite item">
  <mat-option *ngFor="let item of items" [value]="item.value">
  {{item.foodItem}}
  </mat-option>
  </mat-select>
  </mat-form-field>
  </div>

  `,
      language: 'html'
    },
    ts: {
      content: `
  import { Component, OnInit } from '@angular/core';
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

  constructor() { }
  ngOnInit() {
  }

  onFoodTypeChanges(event){
  this.items=this.itemsArray;
  let tempItems = this.items.filter(item=> item.foodType == event.value);
  this.items =tempItems;
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