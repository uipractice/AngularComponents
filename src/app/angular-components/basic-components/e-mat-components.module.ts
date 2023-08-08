import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ESharedModule } from '../../e-shared/e-shared.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgxCarouselModule } from 'ngx-carousel';

import {
  ELayoutComponent,
  EMatCrudTableComponent,
  EMatDragDropComponent,
  EMatVirtualScrollComponent,
  // EMatLanguageSwitchComponent,
} from './index';
import { EMatAccordianComponent } from './e-mat-accordian/e-mat-accordian.component';
import { EMatBreadcrumbComponent } from './e-mat-breadcrumb/e-mat-breadcrumb.component';
import { EMatDatePickerComponent } from './e-mat-datepicker/e-mat-datepicker.component';
import { EMatSpinnerComponent } from './e-mat-spinner/e-mat-spinner.component';
import { EMatDialogComponent, EMatDialogPopupComponent } from './e-mat-dialog/e-mat-dialog.component';
import { EMatMenuComponent } from './e-mat-menu/e-mat-menu.component';
import { EMatTabsComponent } from './e-mat-tabs/e-mat-tabs.component';
import { EMatTooltipComponent } from './e-mat-tootltip/e-mat-tooltip.component';
import { EMatProgressbarComponent } from './e-mat-progressbar/e-mat-progressbar.component';
import { EMatSwitchComponent } from './e-mat-switch/e-mat-switch.component';
import { EMatToastComponent } from './e-mat-toast/e-mat-toast.component';
import { EMatSliderComponent } from './e-mat-slider/e-mat-slider.component';
import { EMatNavigationComponent } from './e-mat-navigation/e-mat-navigation.component';
import { EMatMapComponent } from './e-mat-map/e-mat-map.component';
import { EMatVideoComponent } from './e-mat-video/e-mat-video.component';
import { EMatDropdownComponent } from './e-mat-dropdown/e-mat-dropdown.component';
import { EMatAutocompleteComponent } from './e-mat-autocomplete/e-mat-autocomplete.component';
import { EDualRangeSliderComponent } from './e-dual-range-slider/e-dual-range-slider.component';
import { EMatGridComponent } from './e-mat-grid/e-mat-grid.component';
import { EMatFileUploadComponent } from './e-mat-file-upload/e-mat-file-upload.component';
import { EMatFormValidComponent } from './e-mat-formValid/e-mat-formvalid.component';
import { EMatSurveyComponent } from './e-mat-survey-forms/e-mat-survey-forms.component';
import { EMatStepperComponent } from './e-mat-stepper/e-mat-stepper.component';
import { EMatCalendarComponent } from './e-mat-calendar/e-mat-calendar.component';
import { EMatNotificationComponent } from './e-mat-notification/e-mat-notification.component';
import { CarouselGalleryComponent } from './carousel-gallery/carousel-gallery.component';
import { AlertExampleComponent } from './Alerts/alert-example/alert-example.component';
import { AlertDialogComponent } from './Alerts/alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from './Alerts/confirm-dialog/confirm-dialog.component';
import { EMatCardComponent } from './e-mat-card/e-mat-card.component';
import { EMatChipsComponent } from './e-mat-chips/e-mat-chips.component';
import { EMatCustomDropdownComponent } from './e-mat-custom-dropdown/e-mat-custom-dropdown.component';
import { ECustomTableComponent } from '../Tables/e-custom-table/e-custom-table.component';

import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  imports: [
    ESharedModule,
    ReactiveFormsModule,
    MatDialogModule,
    //NgxCarouselModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  declarations:
    [
      EMatAccordianComponent,
      EMatBreadcrumbComponent,
      EMatDatePickerComponent,
      EMatSpinnerComponent,
      EMatDialogComponent,
      EMatDialogPopupComponent,
      EMatMenuComponent,
      EMatTabsComponent,
      EMatTooltipComponent,
      EMatProgressbarComponent,
      EMatSwitchComponent,
      EMatToastComponent,
      EMatSliderComponent,
      EMatNavigationComponent,
      EMatMapComponent,
      EMatVideoComponent,
      EMatDropdownComponent,
      EMatAutocompleteComponent,
      EDualRangeSliderComponent,
      EMatGridComponent,
      EMatFileUploadComponent,
      ELayoutComponent,
      EMatCrudTableComponent,
      EMatDragDropComponent,
      EMatVirtualScrollComponent,
      // EMatLanguageSwitchComponent,
      EMatFormValidComponent,
      EMatSurveyComponent,
      EMatStepperComponent,
      EMatCalendarComponent,
      EMatNotificationComponent,
      CarouselGalleryComponent,
      AlertExampleComponent,
      AlertDialogComponent,
      ConfirmDialogComponent,
      EMatCardComponent,
      EMatChipsComponent,
      EMatCustomDropdownComponent,
      ECustomTableComponent,
      
      
    ],
  exports: [
    EMatAccordianComponent,
    EMatBreadcrumbComponent,
    EMatDatePickerComponent,
    EMatSpinnerComponent,
    EMatDialogComponent,
    EMatDialogPopupComponent,
    EMatMenuComponent,
    EMatTabsComponent,
    EMatTooltipComponent,
    EMatProgressbarComponent,
    EMatSwitchComponent,
    EMatToastComponent,
    EMatSliderComponent,
    EMatNavigationComponent,
    EMatMapComponent,
    EMatVideoComponent,
    EMatDropdownComponent,
    EMatAutocompleteComponent,
    EDualRangeSliderComponent,
    EMatGridComponent,
    EMatFileUploadComponent,
    EMatFormValidComponent,
    EMatSurveyComponent,
    EMatStepperComponent,
    EMatCalendarComponent,
    EMatNotificationComponent
  ],
  entryComponents: [EMatDialogComponent, EMatDialogPopupComponent],
})
export class EMatComponentsModule { }
