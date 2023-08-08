import { Routes, RouterModule } from "@angular/router";
import { EDashboardComponent, ELayoutComponent } from './e-modules/index';

// import { AppLangComponent } from './e-l10n/applang.component';
import {
EMatDatePickerComponent,
EMatSpinnerComponent, EMatTabsComponent,
EMatTooltipComponent, EMatProgressbarComponent,
EMatSwitchComponent, EMatToastComponent,
EMatDialogComponent,
EMatMenuComponent, EMatSliderComponent,
EMatBreadcrumbComponent,
EMatNavigationComponent, EMatAutocompleteComponent, EMatAccordianComponent,
EMatMapComponent,
EMatVideoComponent, EMatDropdownComponent, EDualRangeSliderComponent, EMatReactiveFormsComponent,
EMatTemplateDrivenFormsComponent, EMatPaginationComponent, EMatGridComponent, EMatFileUploadComponent, EMatFilterTableComponent,
EMatInlineEditTableComponent,
EMatLoginComponent, EMatFormValidComponent,
EMatSurveyComponent, EMatDatagridComponent,
EMatSortTableComponent, EMatStepperComponent,
EMatIconsComponent, EMatRegisterComponent,
EMatForgotComponent, EMatCrudTableComponent,
EMatDragDropComponent, EMatVirtualScrollComponent,
EMatCalendarComponent,EMatNotificationComponent


} from './angular-components/basic-components/index';
import { LinechartComponent } from './angular-components/chart-components/linechart/linechart.component';
import { PichartComponent } from './angular-components/chart-components/pichart/pichart.component';
import { BarchartComponent } from './angular-components/chart-components/barchart/barchart.component';
import { SearchfieldComponent } from './angular-components/Apps/searchfield/searchfield.component';
import { DragndropComponent } from './angular-components/basic-components/dragndrop/dragndrop.component';
// import { TimepickerComponent } from './angular-components/basic-components/timepicker/timepicker.component';
import { PdfViewerComponent } from './angular-components/Apps/pdf-viewer/pdf-viewer.component';
import { DualsliderComponent } from './angular-components/basic-components/dualslider/dualslider.component';
import { FeedbackFormComponent } from './angular-components/Forms/feedback-form/feedback-form.component';
import { CarouselGalleryComponent } from './angular-components/basic-components/carousel-gallery/carousel-gallery.component';
import { AlertExampleComponent } from "./angular-components/basic-components/Alerts/alert-example/alert-example.component";
import { EMatCustomDropdownComponent } from "./angular-components/basic-components/e-mat-custom-dropdown/e-mat-custom-dropdown.component";
import { ECustomTableComponent } from "./angular-components/Tables/e-custom-table/e-custom-table.component";
import { EMatCardComponent } from "./angular-components/basic-components/e-mat-card/e-mat-card.component";
import { EMatChipsComponent } from "./angular-components/basic-components/e-mat-chips/e-mat-chips.component";
import { ImageGalleryComponent } from "./angular-components/Apps/image-gallery/image-gallery.component";
import { SpreadsheetComponent } from "./angular-components/Apps/spreadsheet/spreadsheet.component"; 
import { ShoppingCartComponent } from "./angular-components/Apps/shopping-cart/shopping-cart.component";
import { TextEditorComponent } from "./angular-components/Apps/text-editor/text-editor.component";
import { NgpdfviewerComponent } from "./angular-components/Apps/ngpdfviewer/ngpdfviewer.component";
import { AgGridComponent } from "./angular-components/Apps/ag-grid/ag-grid.component";
import { ExportexcelComponent } from "./angular-components/Apps/exportexcel/exportexcel.component";
const routes: Routes = [
    {
        path: 'carousel', component: ELayoutComponent, children: [
        {
        path: '', component: CarouselGalleryComponent, outlet: 'basic', data: { name: 'Carousel', type: 'Custom' }
        }
        ]
        },
{
path: 'map', component: ELayoutComponent, children: [
{
path: '', component: EMatMapComponent, outlet: 'basic', data: { name: 'Map', type: 'Custom' }
}
]
},
{
path: 'video', component: ELayoutComponent, children: [
{
path: '', component: EMatVideoComponent, outlet: 'basic', data: { name: 'Video', type: 'Custom' }
}
]
},
{
path: 'dropdown', component: ELayoutComponent, children: [
{
path: '', component: EMatDropdownComponent, outlet: 'basic', data: { name: 'Dropdown', type: 'Material' }
}
]
},
{
path: 'navigation', component: ELayoutComponent, children: [
{
path: '', component: EMatNavigationComponent, outlet: 'basic', data: { name: 'Navigation', type: 'Material' }
}
]
},
{
path: 'PDF-viewer', component: ELayoutComponent, children: [
{
path: '', component: PdfViewerComponent, outlet: 'basic', data: { name: 'Pdf Viewer', type: 'Material' }
}
]
},
{
    path: 'ng-PDF-Viewer', component: ELayoutComponent, children: [
    {
    path: '', component: NgpdfviewerComponent, outlet: 'basic', data: { name: ' Ng Pdf Viewer', type: 'Material' }
    }
    ]
 },
 {
    path: 'agGrid-Table', component: ELayoutComponent, children: [
    {
    path: '', component: AgGridComponent, outlet: 'basic', data: { name: ' AgGrid Table', type: 'Material' }
    }
    ]
 },

{
path: 'date-Picker', component: ELayoutComponent, children: [
{
path: '', component: EMatDatePickerComponent, outlet: 'basic', data: { name: 'Datepicker', type: 'Material' }
}
]
},

{
path: 'dialog', component: ELayoutComponent, children: [
{
path: '', component: EMatDialogComponent, outlet: 'basic', data: { name: 'Dialog', type: 'Material' }
}
]
},
{
path: 'tooltip', component: ELayoutComponent, children: [
{
path: '', component: EMatTooltipComponent, outlet: 'basic', data: { name: 'Tooltip', type: 'Material' }
}
]
},
{
path: 'menu', component: ELayoutComponent, children: [
{
path: '', component: EMatMenuComponent, outlet: 'basic', data: { name: 'Menu', type: 'Material' }
}
]
},
{
path: 'spinner', component: ELayoutComponent, children: [
{
path: '', component: EMatSpinnerComponent, outlet: 'basic', data: { name: 'Spinner', type: 'Material' }
}
]
},
{
path: 'slider', component: ELayoutComponent, children: [
{
path: '', component: EMatSliderComponent, outlet: 'basic', data: { name: 'Slider', type: 'Material' }
}
]
},

{
path: 'breadcrumb', component: ELayoutComponent, children: [
{
path: '', component: EMatBreadcrumbComponent, outlet: 'basic', data: { name: 'Breadcrumb', type: 'Custom' }
}
]
},

{
path: 'progressbar', component: ELayoutComponent, children: [
{
path: '', component: EMatProgressbarComponent, outlet: 'basic', data: { name: 'Progressbar', type: 'Custom' }
}
]
},
{
path: 'switch', component: ELayoutComponent, children: [
{
path: '', component: EMatSwitchComponent, outlet: 'basic', data: { name: 'Switch', type: 'Custom' }
}
]
},
{
path: 'toast', component: ELayoutComponent, children: [
{
path: '', component: EMatToastComponent, outlet: 'basic', data: { name: 'Toast', type: 'Material' }
}
]
},
{
path: 'tabs', component: ELayoutComponent, children: [
{
path: '', component: EMatTabsComponent, outlet: 'basic', data: { name: 'Tabs', type: 'Material' }
}
]
},
{
path: 'Accordion', component: ELayoutComponent, children: [
{
path: '', component: EMatAccordianComponent, outlet: 'basic', data: { name: 'Accordion', type: 'Material' }
}
]
},

{
path: 'autocomplete', component: ELayoutComponent, children: [
{
path: '', component: EMatAutocompleteComponent, outlet: 'basic', data: { name: 'Autocomplete', type: 'Material' }
}
]
},
{
path: 'range', component: ELayoutComponent, children: [
{
path: '', component: EDualRangeSliderComponent, outlet: 'basic', data: { name: 'Dual Slider', type: 'Custom' }
}
]
},
{
path: 'reactive-Forms', component: ELayoutComponent, children: [
{
path: '', component: EMatReactiveFormsComponent, outlet: 'basic', data: { name: 'Reactive Forms', type: 'Material' }
}
]
},
{
path: 'feedback-Forms', component: ELayoutComponent, children: [
{
path: '', component: FeedbackFormComponent, outlet: 'basic', data: { name: 'Feedback Form', type: 'Material' }
}
]
},

{
path: 'template-Driven-Forms', component: ELayoutComponent, children: [
{
path: '', component: EMatTemplateDrivenFormsComponent, outlet: 'basic', data: { name: 'Template Driven Forms', type: 'Material' }
}
]
},
{
path: 'pagination', component: ELayoutComponent, children: [
{
path: '', component: EMatPaginationComponent, outlet: 'basic', data: { name: 'Pagination', type: 'Material' }
}
]
},
{
path: 'grid', component: ELayoutComponent, children: [
{
path: '', component: EMatGridComponent, outlet: 'basic', data: { name: 'Grid', type: 'Material' }
}
]
},
{
path: 'file-Upload', component: ELayoutComponent, children: [
{
path: '', component: EMatFileUploadComponent, outlet: 'basic', data: { name: 'File Upload', type: 'Custom' }
}
]
},
{
path: 'notification', component: ELayoutComponent, children: [
{
path: '', component: EMatNotificationComponent, outlet: 'basic', data: { name: 'Notification', type: 'Material' }
}
]
},
{
path: 'filter-Table', component: ELayoutComponent, children: [
{
path: '', component: EMatFilterTableComponent, outlet: 'basic', data: { name: 'Filter Table', type: 'Material' }
}
]
},
{
path: 'editable-Table', component: ELayoutComponent, children: [
{
path: '', component: EMatInlineEditTableComponent, outlet: 'basic', data: { name: 'Editable Table', type: 'Material' }
}
]
},

{
path: 'Sign-In', component: ELayoutComponent, children: [
{
path: '', component: EMatLoginComponent, outlet: 'basic', data: { name: 'Sign In', type: 'Material' }
}
]
},

{
path: 'formValidations', component: ELayoutComponent, children: [
{ path: '', component: EMatFormValidComponent, outlet: 'basic', data: { name: 'FormValidations', type: 'Material' } }
]
},
{
path: 'survay-Forms', component: ELayoutComponent, children: [
{ path: '', component: EMatSurveyComponent, outlet: 'basic', data: { name: 'Survey Forms', type: 'SurveyJS' } }
]
},
{
path: 'dataGrid', component: ELayoutComponent, children: [
{ path: '', component: EMatDatagridComponent, outlet: 'basic', data: { name: 'DataGrid', type: 'Materials' } }
]
},
{
path: 'sortable-Table', component: ELayoutComponent, children: [
{ path: '', component: EMatSortTableComponent, outlet: 'basic', data: { name: 'Sortable Table', type: 'Materials' } }
]
},
{
path: 'stepper', component: ELayoutComponent, children: [
{ path: '', component: EMatStepperComponent, outlet: 'basic', data: { name: 'Stepper', type: 'Materials' } }
]
},
{
path: 'icons', component: ELayoutComponent, children: [
{ path: '', component: EMatIconsComponent, outlet: 'basic', data: { name: 'Icons', type: 'Materials' } }
]
},
{
path: 'search', component: ELayoutComponent, children: [
{ path: '', component: SearchfieldComponent, outlet: 'basic', data: { name: 'Search', type: 'Materials' } }
]
},
{
path: 'Sign-Up', component: ELayoutComponent, children: [
{ path: '', component: EMatRegisterComponent, outlet: 'basic', data: { name: 'Sign Up', type: 'Materials' } }
]
},
{
path: 'forgot-Password', component: ELayoutComponent, children: [
{ path: '', component: EMatForgotComponent, outlet: 'basic', data: { name: 'Forgot Password', type: 'Materials' } }
]
},
{
path: 'calendar', component: ELayoutComponent, children: [
{ path: '', component: EMatCalendarComponent, outlet: 'basic', data: { name: 'Calendar', type: 'Materials' } }
]
},

{
path: 'CRUD-Table', component: ELayoutComponent, children: [
{ path: '', component: EMatCrudTableComponent, outlet: 'basic', data: { name: 'CRUD In Table', type: 'Materials' } }
]
},
{
path: 'dragnDrop', component: ELayoutComponent, children: [
{ path: '', component: DragndropComponent, outlet: 'basic', data: { name: 'DragnDrop', type: 'Materials' } }
]
},
{
path: 'virtual-Scrolling', component: ELayoutComponent, children: [
{ path: '', component: EMatVirtualScrollComponent, outlet: 'basic', data: { name: 'Virtual Scrolling', type: 'Materials' } }
]
},
{ path: 'dual-slider', component: ELayoutComponent,children:[
    {path: '', component:DualsliderComponent , outlet: 'basic', data: { name: 'Dual Slider', type : 'Materials' }}
    ]},

// { path: 'time-Picker', component: ELayoutComponent,children:[
// {path: '', component:TimepickerComponent , outlet: 'basic', data: { name: 'Time Picker', type : 'Materials' }}
// ]},

// {
// path: 'language-Switch', component: ELayoutComponent, children: [
// { path: '', component: AppLangComponent, outlet: 'basic', data: { name: 'Language Switch', type: 'Materials' } }
// ]
// },
{
path: 'bar-Chart', component: ELayoutComponent, children: [
{ path: '', component: BarchartComponent, outlet: 'basic', data: { name: 'Bar Chart', type: 'Materials' } }
]
},
{
    path: 'Pie-Chart', component: ELayoutComponent, children: [
    { path: '', component: PichartComponent, outlet: 'basic', data: { name: 'Pie Chart', type: 'Materials' } }
    ]
    },
    {
        path: 'line-Chart', component: ELayoutComponent, children: [
        { path: '', component: LinechartComponent, outlet: 'basic', data: { name: 'line Chart', type: 'Materials' } }
        ]
        },
        {
            path: 'alerts', component: ELayoutComponent, children: [
            { path: '', component: AlertExampleComponent, outlet: 'basic', data: { name: 'Alerts', type: 'Custom' } }
            ]
            },
            {
            path: 'custom-dropdown', component: ELayoutComponent, children: [
            { path: '', component: EMatCustomDropdownComponent, outlet: 'basic', data: { name: 'Custom Dropdown', type: 'Custom' } }
            ]
            },
            {
            path: 'custom-table', component: ELayoutComponent, children: [
            { path: '', component: ECustomTableComponent, outlet: 'basic', data: { name: 'Custom Table', type: 'Custom' } }
            ]
            },
            {
            path: 'card', component: ELayoutComponent, children: [
            { path: '', component: EMatCardComponent, outlet: 'basic', data: { name: 'Card', type: 'Material' } }
            ]
            },
            {
            path: 'chip', component: ELayoutComponent, children: [
            { path: '', component: EMatChipsComponent, outlet: 'basic', data: { name: 'Chip', type: 'Material' } }
            ]
            },
            {
                path: 'image-Gallery', component: ELayoutComponent, children: [
                {
                path: '', component: ImageGalleryComponent , outlet: 'basic', data: { name: 'Image Gallery', type: 'Custom' }
                }
                ]
            },
            {
            path: 'spreadsheet', component: ELayoutComponent, children: [
            {
            path: '', component: SpreadsheetComponent, outlet: 'basic', data: { name: 'Spreadsheet', type: 'Custom' }
            }
            ]
            },
            {
                path: 'exportExcel', component: ELayoutComponent, children: [
                {
                path: '', component: ExportexcelComponent, outlet: 'basic', data: { name: 'exportExcel', type: 'Custom' }
                }
                ]
                },
            {
            path: 'text-Editor', component: ELayoutComponent, children: [
            {
            path: '', component: TextEditorComponent , outlet: 'basic', data: { name: 'Text Editor', type: 'Custom' }
            }
            ]
            },
            {
                path: 'shopping-Cart', component: ELayoutComponent, children: [
                {
                path: '', component: ShoppingCartComponent, outlet: 'basic', data: { name: 'Shopping Cart', type: 'Custom' }
                }
                ]
                },
                
    



// {path:'list', loadChildren:'./list/list.module#ListModule'},
// { path: 'list', loadChildren: './angular-components' },
{ path: 'dashboard', component: EDashboardComponent },
{ path: 'layout', component: ELayoutComponent },
{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },


];

export const appRoutes = RouterModule.forRoot(routes);
