import { ESharedModule } from 'src/app/e-shared';
import { EMatIconsComponent } from '../basic-components';
import { NgModule } from '@angular/core';
import { SearchfieldComponent } from './searchfield/searchfield.component';
import { EModuleModules } from '../../e-modules/e-modules.module';
import { DragndropComponent } from '../basic-components/dragndrop/dragndrop.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DualsliderComponent } from '../basic-components/dualslider/dualslider.component';
import { PichartComponent } from '../chart-components/pichart/pichart.component';
import { BarchartComponent } from '../chart-components/barchart/barchart.component';
import { LinechartComponent } from '../chart-components/linechart/linechart.component';
import { ChartsModuloe } from '../../angular-components/chart-components/chartsModule.module';
import { ChartsModule } from 'ng2-charts';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartService } from '../Services/shopping-cart.service';
import { CheckoutComponent } from './shopping-cart/checkout/checkout.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgpdfviewerComponent } from './ngpdfviewer/ngpdfviewer.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { ExportexcelComponent } from './exportexcel/exportexcel.component';
@NgModule({
imports: [
    ESharedModule,
    EModuleModules,
    NgxExtendedPdfViewerModule,
    //Ng5SliderModule,
    ChartsModuloe,
    ChartsModule,
    NgxGalleryModule,
    CKEditorModule,
    MatDialogModule,
    ReactiveFormsModule,
    PdfViewerModule,
    FormsModule,
    AgGridModule,
    NgxSliderModule],
declarations: [
EMatIconsComponent,
SearchfieldComponent,
DragndropComponent,
PdfViewerComponent,
DualsliderComponent,PichartComponent,BarchartComponent,LinechartComponent,
ImageGalleryComponent,
SpreadsheetComponent,
TextEditorComponent,
ShoppingCartComponent, 
CheckoutComponent, 
CartComponent, NgpdfviewerComponent, AgGridComponent, ExportexcelComponent
],
providers: [ShoppingCartService],
entryComponents: [CheckoutComponent],
exports: [
EMatIconsComponent,
],
})
export class AppsModule {}
