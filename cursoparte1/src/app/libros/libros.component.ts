import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  // Utilizamos any cuando queremos 'dessuscribirnos' o cuando hacemos peticiones a elementos de terceros, sino pondríamos Array<object>
  libros : any
  verAutor : any

  constructor() {
    this.libros = [
      {id:'1', titulo: 'Te veré bajo el hielo', autor:'Robert Bryndza'},
      {id:'2', titulo: 'Dime quién soy', autor:'Julia Navarro'},
      {id:'3', titulo: 'El día que se perdió la cordura', autor:'Javier Castillo'}
    ]
   }

  ngOnInit(): void {
    console.log(this.libros);
  }
  showAuthor(_libro){
    this.verAutor = 'escrito por: ' +  _libro.autor;
    alert(this.verAutor);
  }

}
