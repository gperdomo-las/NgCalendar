import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-grid',
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss']
})
export class CalendarGridComponent implements OnInit {

  daysOfMonth:number[] = [];

  constructor() { }

  ngOnInit(): void {

    this.daysOfMonthGenerator(31);

    console.log('Array de días generado:', this.daysOfMonth);
  }

  daysOfMonthGenerator(days:number){
    for (let day = 1; day <= days; day++){
      this.daysOfMonth.push(day);
    }
    
  }

}
