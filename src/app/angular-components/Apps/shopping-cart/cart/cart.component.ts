import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../../Services/shopping-cart.service';
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

}
