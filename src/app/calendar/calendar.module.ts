import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CalendarComponent } from './components/calendar/calendar.component';



@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
      CalendarComponent
    ],
})
export class CalendarModule { 
  
 }
