import { NgModule } from '@angular/core';
import { ESharedModule } from 'src/app/e-shared';
import { EMatDatagridComponent, EMatFilterTableComponent, EMatPaginationComponent, EMatSortTableComponent, EMatInlineEditTableComponent } from '../basic-components';


@NgModule({
    imports: [ESharedModule],
    declarations: [
        EMatFilterTableComponent,
        EMatDatagridComponent,
        EMatPaginationComponent,
        EMatSortTableComponent,
        EMatInlineEditTableComponent,
    ],
    exports: [
        EMatFilterTableComponent,
        EMatDatagridComponent,
        EMatPaginationComponent,
        EMatSortTableComponent,
        EMatInlineEditTableComponent,
    ],
})

export class tablesModule {

}