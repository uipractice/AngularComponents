import { Component,ViewChild } from '@angular/core';

import { FormGroup } from '@angular/forms';

import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service';
// import {FieldConfig} from './field.interface';
// import {DynamicFormComponent} from './dynamic-forms.component';
@Component({
  selector: 'app-e-mat-survey',
  templateUrl: './e-mat-survey-forms.component.html',
  styleUrls: ['./e-mat-survey-forms.component.scss']
})
export class EMatSurveyComponent {
  //myForm:FormGroup;
  // @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  // field: FieldConfig;
   // group: FormGroup;
  code:any;
  questions:any  = [
    {question:'Who is your First Prime Minister Of India?', options:['Dr.Manmohan Singh', 'Chandrashekar Ajadh','Mahatma Gandhi','Jyothirao Pule'], name:'answer1'},
    {question:'Who is your Second Prime Minister Of India?', options:['Dr.Manmohan Singh', 'Chandrashekar Ajadh','Mahatma Gandhi','Jyothirao Pule'], name:'answer2'},
    {question:'Who is your First lady Prime Minister Of India?', options:['Dr.Manmohan Singh', 'Chandrashekar Ajadh','Mahatma Gandhi','Jyothirao Pule'], name:'answer3'}

  ];
  // regConfig: FieldConfig[] = [
  //   {
  //     type: "radiobutton",
  //     order:1,
  //     label: "Who is First Prime Ministor of India?",
  //     name: "Answer-1",
  //     options: ["Gandhi", "Indhira Gandhi","Soniya Gandhi","Chacha Nehru"],
  //     value: "answer"
  //   },
  //   {
  //     type: "radiobutton",
  //     order:2,
  //     label: "Who is Second Prime Ministor of India?",
  //     name: "Answer-2",
  //     options: ["Gandhi", "Indhira Gandhi","Soniya Gandhi","Chacha Nehru"],
  //     value: "answer"
  //   },
  //   {
  //     type: "radiobutton",
  //     order:3,
  //     label: "The Phone Invented By-------",
  //     name: "Answer-3",
  //     options: ["Gandhi", "Indhira Gandhi","Soniya Gandhi","Chacha Nehru"],
  //     value: "answer"
  //   },
  //
  //   {
  //     type: "button",
  //     label: "Next"
  //   }
  // ];
  constructor(private eShareDataService : EShareDataService) { }
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
  }
  submit(value: any) {}

}
