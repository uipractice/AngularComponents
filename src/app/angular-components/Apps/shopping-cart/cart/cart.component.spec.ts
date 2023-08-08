// import { Overlay } from '@angular/cdk/overlay';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { ShoppingCartService } from 'src/app/angular-components/Services/shopping-cart.service';
// import { MatDialog, MatDialogModule } from '@angular/material/dialog';
// import { CartComponent } from './cart.component';
// import { CheckoutComponent } from '../checkout/checkout.component';
// import { MaterialModule } from 'src/app/e-l10n/shared/material.module';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatSelectModule } from '@angular/material/select';
// //import { MdCardModule } from '@angular/material';

// xdescribe('CartComponent', () => {
//   let component: CartComponent;
//   let fixture: ComponentFixture<CartComponent>;
//   let dialogspy:any;

//   beforeEach(async(() => {
//     dialogspy= jasmine.createSpyObj('dialog',["dialog"])
//     TestBed.configureTestingModule({
//       declarations: [ CartComponent,CheckoutComponent ],
//       imports: [
//         MaterialModule,MatButtonModule, MatDialogModule,MatIconModule,MatSelectModule//MdCardModule
        
//     ],  
//       providers: [ MatSnackBar, Overlay, ShoppingCartService, 
//         { provide: MatDialog, useValue: dialogspy }]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CartComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
