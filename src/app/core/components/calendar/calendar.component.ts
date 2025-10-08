import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { ICalendarDay } from 'src/app/interfaces/icalendar-day';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendarDays: ICalendarDay[] = [];
  currentDate: Date = new Date();

  constructor(private dateAdapter: DateAdapter<Date>) { }

  ngOnInit(): void {
  }

  generateCalendar(date: Date): void {
    this.calendarDays = [];
    
    const startOfMonth = this.dateAdapter.createDate(date.getFullYear(), date.getMonth(), 1);
    const today = new Date();
    const startDayOfWeek = this.dateAdapter.getDayOfWeek(startOfMonth);
    const daysToPrepend = startDayOfWeek;

    let dateIterator = this.dateAdapter.addCalendarDays(startOfMonth, -daysToPrepend);

    for (let i = 0; i < 42; i++){
      const currentMonth = date.getMonth();
      const isCurrentMonth = dateIterator.getMonth() === currentMonth;

      this.calendarDays.push({
        date: dateIterator,
        dayOfMonth: this.dateAdapter.getDate(dateIterator),
        isCurrentMonth: isCurrentMonth,
        isToday: this.dateAdapter.sameDate(dateIterator, today),
        dayOfWeek: this.dateAdapter.getDayOfWeek(dateIterator)
      })
    }

      dateIterator = this.dateAdapter.addCalendarDays(dateIterator, 1);
    
  }
}
