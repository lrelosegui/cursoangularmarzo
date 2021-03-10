import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Product } from "../interface/product";

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatelessComponent implements OnInit {
  @Output() cursomatriculado: EventEmitter<Product> = new EventEmitter();
  @Input() product: Product;
  public matricula: string;
  private disable: boolean;

  constructor() { }

  ngOnInit(): void {
    this.matricula = `Comprar`;
  }

  matricularse() {
    this.disable = true;
    this.matricula = '¡Matriculado!';
    this.cursomatriculado.emit(this.product);
  }
  isdisabled() {
    console.log(this.product.title);
    return !!this.disable;
  }

  mensaje(){
    alert('¿Estas intentando descargarte la imagen? NO PUEDES')
  }

}
