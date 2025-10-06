import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './components/principal/principal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PieComponent } from './components/pie/pie.component';
import { CalendarComponent } from '../calendar/components/calendar/calendar.component';
import { CalendarHeaderComponent } from '../calendar/components/calendar-header/calendar-header.component';
import { CalendarGridComponent } from '../calendar/components/calendar-grid/calendar-grid.component';
import { CalendarDayCellComponent } from '../calendar/components/calendar-day-cell/calendar-day-cell.component';
import { CalendarEventComponent } from '../calendar/components/calendar-event/calendar-event.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    CabeceraComponent,
    PieComponent,
    CalendarComponent,
    CalendarHeaderComponent,
    CalendarGridComponent,
    CalendarDayCellComponent,
    CalendarEventComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // faltan módulos de lib-visual
    // UltranetTablasModule,
    // SysutilsModule,
    // VisualModule
  ],
  exports: [
    PrincipalComponent,
    CabeceraComponent,
    PieComponent
  ],
})
export class CoreModule { }
