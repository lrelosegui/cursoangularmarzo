import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { observable } from 'rxjs';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  libros: any;
  libroId: number;
  libroClick: any;

  constructor(private rutausuario: ActivatedRoute) {
    this.libros = [
      { id: '1', titulo: 'Te veré bajo el hielo', autor: 'Robert Bryndza' },
      { id: '2', titulo: 'Dime quién soy', autor: 'Julia Navarro' },
      { id: '3', titulo: 'El día que se perdió la cordura', autor: 'Javier Castillo' }
    ]
  }

  ngOnInit(): void {
    // En este método, de forma asíncrona, vamos a suscribirnos a un observable, porque es probable que cuando cargue la aplicación aún no tengamos información del id
    this.rutausuario.params.subscribe(params => { // Params aquí es un método asíncrono, que tiene subscribe
      this.libroId = params['libroId'] // Params aquí es un array asociativo
      this.libroClick = this.libroBuscador();
    })
  }

  filtroId(libro){
    return libro.id == this;
  }

  libroBuscador(){
    return this.libros.filter(this.filtroId, this.libroId)[0];
  }
}
