import { Component, ViewChild, OnInit, ContentChild } from '@angular/core';
// import { FullCalendarComponent } from '@fullcalendar/angular';
// import { EventInput } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGrigPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction'; // for dateClick


import {Code} from './code';
import {EShareDataService} from '../../../e-shared/e-sharedata.service'
 

@Component({
  selector: 'app-e-mat-calendar',
  templateUrl: './e-mat-calendar.component.html',
  styleUrls: ['./e-mat-calendar.component.scss']
})
export class EMatCalendarComponent implements OnInit {
  code:any;
  constructor(private eShareDataService : EShareDataService) { }
  
  ngOnInit() {
    this.code = Code;
    this.eShareDataService.pushCode(this.code);
    
    
  }

 
  @ViewChild('calendar', { static: false }) calendarComponent: any; // the #calendar in the template

  calendarVisible = true;
  // calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  // calendarEvents: EventInput[] = [
  //   { title: 'Event Now', start: new Date() }
  // ];

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }

  handleDateClick(arg: any) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      // this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
      //   title: 'New Event',
      //   start: arg.date,
      //   allDay: arg.allDay
      // })
    }
  }

}
