import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarGridComponent } from './components/calendar/calendar-grid/calendar-grid.component';
import { CalendarEventComponent } from './components/calendar/calendar-event/calendar-event.component';
import { CalendarDayCellComponent } from './components/calendar/calendar-day-cell/calendar-day-cell.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    CalendarComponent,
    CalendarGridComponent,
    CalendarDayCellComponent,
    CalendarEventComponent,
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
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    CalendarComponent,
    CalendarGridComponent,
    CalendarDayCellComponent,
    CalendarEventComponent,
  ],
})
export class CoreModule {}
