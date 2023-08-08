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

}
