import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Prueba01Component } from './prueba01/prueba01.component';
import { RandomComponent } from './random/random.component';
import { ColoresComponent } from './colores/colores.component';
import { FirmaComponent } from './firma/firma.component';
import { LibrosComponent } from './libros/libros.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { InformacionComponent } from './informacion/informacion.component';

import { LibroclickedService } from './libroclicked.service';
import { HttpClientModule } from '@angular/common/http';

const rutas: Routes = [
  /* El enrutador va de arriba a abajo. Si pongo listado-libros, recorre esta lista y la primera que le encaja la ejecuta. Por esto se pone la de '**' al final */
  { path: 'listado-libros', component: LibrosComponent },
  { path: 'informacion/:libroId', component: InformacionComponent }, /* Exigimos que la ruta lleve el id del libro */
  { path: 'informacion', redirectTo: '/' }, /* Con la anterior se nos queda sin manejar la ruta información (sin identificador) */
  { path: '', component: InicioComponent, pathMatch: 'full' } /* Componente por defecto siempre que se entre a la aplicación */,
  { path: '**', redirectTo: '/' } /* Cualquier ruta que no puedas manejar, redirígela a la raíz. Dejarla siempre para el final */
]

@NgModule({
  declarations: [
    AppComponent,
    Prueba01Component,
    RandomComponent,
    ColoresComponent,
    FirmaComponent,
    LibrosComponent,
    SobreNosotrosComponent,
    CabeceraComponent,
    InicioComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [
    LibroclickedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
