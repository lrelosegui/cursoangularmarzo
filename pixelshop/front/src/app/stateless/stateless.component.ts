import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from "../interface/product";

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
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
    return !!this.disable;
  }

}
