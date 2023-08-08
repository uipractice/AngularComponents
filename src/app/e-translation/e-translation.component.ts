import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { YandexService } from './e-service/e-translation.service';

@Component({
    selector: 'e-translation',
    templateUrl: './e-translation.component.html',
    styleUrls: ['./e-translation.component.scss']
})
export class ETranslationComponent implements OnInit {

    enText: string = "";
    enDescription: string = "";
    arText: string = "";
    arDescription: string = "";

    constructor(
        private yandexService: YandexService
    ) {

    }

    ngOnInit() {
    }


    onEnTextInput() {
        this.yandexService.translate(this.enText, 'ar').subscribe(
            (result: any) => {
                this.arText = result.text[0];
            }
        );
    }

    onEnDescriptionInput() {
        this.yandexService.translate(this.enDescription, 'ar').subscribe(
            (result: any) => {
                this.arDescription = result.text[0];
            }
        );
    }

    send() {
        forkJoin([this.yandexService.translate(this.enText, 'ar'), this.yandexService.translate(this.enDescription, 'ar')]).subscribe(
            (result: any) => {
                this.arText = result[0].text[0];
                this.arDescription = result[1].text[0];
            }
        );
    }
}
