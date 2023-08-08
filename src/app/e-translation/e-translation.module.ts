import { NgModule } from '@angular/core';
import { ETranslationComponent } from './e-translation.component';
import { ESharedModule } from '../e-shared';
import { YandexService } from './e-service/e-translation.service';

@NgModule({
  imports: [
    ESharedModule
  ],
  exports: [
  ],
  declarations: [
    ETranslationComponent
  ],
  providers: [YandexService]
})
export class ETranslationModule { }
