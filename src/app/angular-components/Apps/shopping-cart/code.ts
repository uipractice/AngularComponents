export const Code = {
html: {
content: `shopping-cart.component:-
<ng-container *ngIf="cartState$ | async as state">
<app-cart [state]="state"></app-cart>
<mat-card>
<mat-card-header>
<mat-card-title>Total: {{ state.tot.subTot | currency:'INR':'symbol':'1.2-2' }}</mat-card-title>

<mat-card-subtitle>
tax: {{ state.tot.tax | currency:'INR':'symbol':'1.2-2' }}
<br />
at checkout: {{ state.tot.grandTot | currency:'INR':'symbol':'1.2-2' }}
</mat-card-subtitle>
</mat-card-header>
<mat-card-actions>
<mat-chip-list>
<mat-chip *ngFor="let item of state.cart" [removable]="true" (removed)="remove(item)">{{ item.name }}
<mat-icon matChipRemove>cancel</mat-icon>
</mat-chip>
</mat-chip-list>
</mat-card-actions>
</mat-card>
<hr />
<mat-grid-list cols="3" rowHeight="3:2" [gutterSize]="'15px'">
<mat-grid-tile *ngFor="let item of state.store">
<mat-card class="items" >
<mat-card-header>
{{ item.name }}
</mat-card-header>
<!-- <img mat-card-image [src]="item.image" [alt]="image"> -->
<mat-card-subtitle>

<ul>
<li>{{ item.details }}</li>
<li>{{ item.price | currency:'INR':'symbol':'1.2-2' }}</li>
</ul>
</mat-card-subtitle>
<mat-card-actions>

<button mat-flat-button  class="shop" role="button" (click)="addItemToCart(item)">
<mat-icon>add_shopping_cart</mat-icon>
Add to cart
</button>
</mat-card-actions>
</mat-card>
</mat-grid-tile>
</mat-grid-list>
</ng-container>


cart.component:-
<p>
	Shopping Cart: <button mat-flat-button  class="cart" role="button" [disabled]="state.cart.length < 1" (click)="checkout()">
    <mat-icon>shopping_cart</mat-icon>
     Checkout {{ state.cart.length }} Item{{ state.cart.length > 1 ? 's' : '' }}</button>
</p>


checkout.component:-
<ng-container *ngIf="(state | async) as s">
	<!-- <pre>
    {{ s | json }}
  </pre> -->
	<h3>
		Checkout
		<button style="float: right;" mat-icon-button [mat-dialog-close]><mat-icon>cancel</mat-icon></button>
  </h3>

	<div *ngIf="s.cart.length > 0; else elseBlock">
  <p>
    Review your items and checkout
  </p>
  <mat-card>
    <mat-card-header>
      <mat-card-title>Total: {{ s.tot.subTot | currency:'INR':'symbol':'1.2-2' }}</mat-card-title>
      <mat-card-subtitle>
      tax: {{ s.tot.tax | currency:'INR':'symbol':'1.2-2' }}
      <br />
          at checkout: {{ s.tot.grandTot | currency:'INR':'symbol':'1.2-2'}}
        </mat-card-subtitle>
      </mat-card-header>
      <mat-card-actions style="text-align: right;">
        <button type="button" mat-button color="accent" (click)="completeOrder()">
          Complete my order <mat-icon>check</mat-icon>
        </button>
      </mat-card-actions>
  </mat-card>
  <div *ngFor="let item of s.cart">
    <p>
      {{ item.name }}<br />
      <strong>{{ item.price }}</strong>
    </p>
  </div>
</div>
  <ng-template #elseBlock>
    <h4>Thank you for your fake purchase!</h4>
     <button type="button" mat-button color="primary" [mat-dialog-close]>
         Close <mat-icon>cancel</mat-icon>
        </button>
  </ng-template>
</ng-container>
`,
language: 'html'
},
ts: {
content: `shopping-cart.component:-
import { Component, OnInit } from '@angular/core';
import { EShareDataService } from 'src/app/e-shared/e-sharedata.service';
import { Code } from './code';
import { ShoppingCartService, CartItem, Totals } from '../../Services/shopping-cart.service';
@Component({
selector: 'app-shopping-cart',
templateUrl: './shopping-cart.component.html',
styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
code: any;
name = 'Shopping Cart';
cartState$ = this.shoppingCartService.state$;
constructor(private shoppingCartService: ShoppingCartService, public eShareDataService: EShareDataService) { }

addItemToCart(item: CartItem) {
this.shoppingCartService.addCartItem(item);
}

remove(item: CartItem): void {
this.shoppingCartService.removeCartItem(item);
}
ngOnInit() {
this.code = Code;
this.eShareDataService.pushCode(this.code);
}
};

cart.component:-
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService, CartItem } from '../../../Services/shopping-cart.service';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutComponent } from '../checkout/checkout.component';
@Component({
selector: 'app-cart',
templateUrl: './cart.component.html',
styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

@Input() state: any;

constructor(private shoppingCartService: ShoppingCartService, private dialog: MatDialog) { }

checkout(): void {
// this.shoppingCartService.checkout();
let dialogRef = this.dialog.open(CheckoutComponent, {
// data: { state: this.state }, // now uses the observable
height: '400px',
width: '600px',
});
}

ngOnInit() {
}
};

checkout.component:-
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ShoppingCartService } from '../../../Services/shopping-cart.service';
import { Observable, of } from 'rxjs';
import { switchMap, shareReplay, share, take } from 'rxjs/operators';
@Component({
selector: 'app-checkout',
templateUrl: './checkout.component.html',
styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

state = this.shoppingCartService.state$.pipe();

// @Inject(MAT_DIALOG_DATA) public data: any,
constructor(
private shoppingCartService: ShoppingCartService,
private dialogRef: MatDialogRef<CheckoutComponent>) { }

completeOrder() {

this.shoppingCartService.checkout();
}
ngOnInit() {
}
};

shopping-cart.service.ts:-
import { Injectable, Inject } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Observable, of, merge, Subject, BehaviorSubject } from 'rxjs';
import { scan, startWith, map, tap, combineLatest, switchMap, skipWhile, shareReplay, debounceTime, publish, refCount, share } from 'rxjs/operators';
import { DATA_ITEMS } from '../Apps/shopping-cart/data';

export interface Totals {
subTot: number;
tax: number;
grandTot: number;
}

export interface CartItem {
price: number;
image: string;
name: string;
details: string;
heart: boolean;
uuid?: any;
remove?: boolean;
}

export interface StateTree {
store: CartItem[];
cart: CartItem[];
tot: Totals,
checkout: boolean;
};

@Injectable()
export class ShoppingCartService {
/**
 * Main Observables
 *
 */
private stateTree$ = new BehaviorSubject<StateTree>(null);
private checkoutTrigger$ = new BehaviorSubject<boolean>(false);
private cartAdd$ = new Subject<CartItem>();
private cartRemove$ = new Subject<CartItem>();

/**
 * Main application cart Observable
 * This could start with items from local storage or even an API call
 * We use scan peak at the items within the cart and add and remove
 */
private get cart$(): Observable<CartItem[]> {
return merge(this.cartAdd$, this.cartRemove$).pipe(
startWith([]),
scan((acc: CartItem[], item: CartItem, []) => {
if (item) {
if (item.remove) {
return [...acc.filter(i => i.uuid !== item.uuid)];
}
return [...acc, item];
}
})
);
}

/**
 * Calcs all Totals from being piped through the cart Observable
 * When an item gets added or removed it will automatically calc
 */
private get total$(): Observable<Totals> {
return this.cart$.pipe(
map(items => {
let total = 0;
for (const i of items) {
total += i.price;
}
return total;
}),
map(cost => ({
subTot: cost,
tax: .034 * cost,
grandTot: .034 * cost + cost
})
)
);
}

/**
 * Main Shopping Cart StateTree
 * Combines all dependencies and maps then to the StateTree Object
 */
state$: Observable<StateTree> = this.stateTree$.pipe(
switchMap(() => this.getItems().pipe(
combineLatest([this.cart$, this.total$, this.checkoutTrigger$]),
debounceTime(0),
)),
map(([store, cart, tot, checkout]: any) => ({ store, cart, tot, checkout })),
tap(state => {
if (state.checkout) {
console.log('checkout', state);
}
}),
// make sure we share to the world! or just the entire app
shareReplay(1)
);

constructor() { }

// Mock data service call
private getItems() {
return of(DATA_ITEMS);
}

// facade for next of cartAdd subject
addCartItem(item: CartItem) {
this.cartAdd$.next({ ...item, uuid: uuid() });
}
// facade for next of cartRemove subject
removeCartItem(item: CartItem) {
this.cartRemove$.next({ ...item, remove: true });
}
// not sure what else to do here so we don't do much
// have a great day!
checkout() {
this.checkoutTrigger$.next(true);
}
}

`,
language: 'javascript'
},
css: {
content: `.mat-grid-tile {
display: block;
position: absolute;
border:1px solid #dfe0e8;
border-radius: 5px;

// margin-top: 0px !important;
}
.mat-grid-list {
display: block;
position: relative;
overflow-x: hidden;
overflow-y: scroll;
padding-bottom: 350px !important;

}
.shop{
width:100%;
background-color:#ff9b21;
color:white;
}


`,
language: 'css'
}
// bootstrapHtml: {
// content: ``,
// language: 'HTML'
// },
// bootstrapTS: {
// content: ``,
// language: 'TS'
// },
// bootstrapCSS: {
// content: `
// `,
// language: 'CSS'
// }
};
