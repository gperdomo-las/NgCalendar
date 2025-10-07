import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-day-cell',
  templateUrl: './calendar-day-cell.component.html',
  styleUrls: ['./calendar-day-cell.component.scss']
})
export class CalendarDayCellComponent implements OnInit {

  @Input() dayNumber:number = 0;

  constructor() { }

  ngOnInit(): void {
  }


}
