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

}
