import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './components/principal/principal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CabeceraComponent } from './components/cabecera/cabecera.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    CabeceraComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    PrincipalComponent
  ],
})
export class CoreModule { }
