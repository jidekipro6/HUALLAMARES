import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddproveComponent } from './provedores/addprove/addprove.component';
import { FormsModule } from '@angular/forms';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { PresupuestosService } from './servicios/presupuestos.service';
import { HttpClientModule } from '@angular/common/http';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';








const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'addprovee', component: AddproveComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'addpres', component: AddpresComponent },
  { path: 'presupuestos', component: PresupuestosComponent },

  { path: 'editpres/:id', component: EditpresComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProveedoresService, PresupuestosService],

  bootstrap: [AppComponent]
})
export class AppModule { }
