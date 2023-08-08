import { async, ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { EToolbarComponent } from "./e-toolbar.component";

describe('EToolbarComponent', () => {
    let component: EToolbarComponent;
    let fixture: ComponentFixture<EToolbarComponent>;
  EToolbarComponent

    beforeEach(()=> {
        TestBed.configureTestingModule({
            providers: [
               
            ]
        });
    });
      it(`should have as title 'Evoke Technologies'`, waitForAsync(() => {
        const fixture = TestBed.createComponent(EToolbarComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Evoke Technologies');
      }));
 

});