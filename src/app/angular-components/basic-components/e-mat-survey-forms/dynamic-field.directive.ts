// import {
// ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit,
// ViewContainerRef
// } from "@angular/core";
// import { RadiobuttonComponent } from "./e-mt-radio.component";
// const componentMapper = {
// // input: InputComponent,
// // button: ButtonComponent,
// // select: SelectComponent,
// // date: DateComponent,
// radiobutton: RadiobuttonComponent,
// // checkbox: CheckboxComponent
// };
// @Directive({
// selector: '[dynamicField]'
// })
// export class DynamicFieldDirective {
// @Input() field: FieldConfig;
// @Input() group: FormGroup;
// componentRef: any;
// constructor() { }
// }
// export class DynamicFieldDirective implements OnInit {
//   constructor(
//   private resolver: ComponentFactoryResolver,
//   private container: ViewContainerRef
//   ) {}
//   ngOnInit() {
//     const factory = this.resolver.resolveComponentFactory(
//           componentMapper[this.field.type]
//           );
//           this.componentRef = this.container.createComponent(factory);
//           // this.componentRef.instance.field = this.field;
//           // this.componentRef.instance.group = this.group;
// }
//
//   }
