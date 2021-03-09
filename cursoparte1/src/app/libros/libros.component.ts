import { Component, OnInit } from '@angular/core';
import { LibroclickedService } from '../libroclicked.service';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  // Utilizamos any cuando queremos 'dessuscribirnos' o cuando hacemos peticiones a elementos de terceros, sino pondríamos Array<object>
  libros: any;
  // verAutor: any;
  errorHttp: Boolean;
  cargando : Boolean;

  constructor(private http: HttpClient, public Libroclicked : LibroclickedService) {
    // Este código no es necesario cuando llamamos al servicio de Libroclicked
    /* this.libros = [
      { id: '1', titulo: 'Te veré bajo el hielo', autor: 'Robert Bryndza' },
      { id: '2', titulo: 'Dime quién soy', autor: 'Julia Navarro' },
      { id: '3', titulo: 'El día que se perdió la cordura', autor: 'Javier Castillo' }
    ] */
  }

  ngOnInit(): void {
    // console.log(this.libros);
    this.cargando = true;
    this.cargarLista();
  }

  // Aquí hay que hacer la petición y concatenar con el verbo http
  cargarLista(){
    // El subscribe lo que va a hacer es ejecutar lo que está dentro de las llaves una vez que tenga la respuesta de libros: La primera si todo está bien, la segunda, si hay un error
    // this.http.get('assets/lista-libros.json').subscribe( // Simulación de servicio con json en assets
    this.http.get('http://localhost:3000/libros/').subscribe(
      (respuesta: Response) => {this.libros = respuesta; this.cargando = false},
      (respuesta: Response) => {this.errorHttp = true}
    )
  }

  agregarLibro(_libroVisto){
    this.Libroclicked.libroVisto(_libroVisto);
  }

  // Este método deja de usarse al utilizar el enrutador
  /* showAuthor(_libro){
    this.verAutor = 'escrito por: ' +  _libro.autor;
    alert(this.verAutor);
  } */

}
