import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './components/principal/principal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PieComponent } from './components/pie/pie.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    CabeceraComponent,
    PieComponent
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
