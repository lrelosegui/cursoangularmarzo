import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent implements OnInit {

  alumnos : Array<object>;
  clearElement : HTMLElement;

  constructor(private ren: Renderer2) {
    this.alumnos = [
      {nombre: "David", id: 1},
      {nombre: "Daniel", id: 2},
      {nombre: "Ana", id: 3},
      {nombre: "Lorena", id: 4},
      {nombre: "Jose", id: 5}
    ]
   }

  ngOnInit(): void {
  }

  activeMethod(elemen:HTMLElement){
    let nuevoElemento = this.ren.createElement("span");
    if(this.clearElement){
      this.ren.removeClass(this.clearElement, 'miclase');
    }
    console.log('Elemento clickado!')
    this.ren.addClass(elemen, 'miclase');
    this.ren.setAttribute(elemen, "data-select", "true");
    
    this.ren.setProperty(nuevoElemento, "innerHTML", "✅");
    this.ren.appendChild(elemen, nuevoElemento);
    this.clearElement = elemen;
  }

}
