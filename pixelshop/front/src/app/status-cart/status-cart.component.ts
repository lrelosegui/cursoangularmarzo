import { Component, Input, OnInit, Output, OnChanges, EventEmitter, SimpleChanges, DoCheck } from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-status-cart',
  templateUrl: './status-cart.component.html',
  styleUrls: ['./status-cart.component.css']
})

// No se recomienda utilizar a la vez OnChanges y DoCheck
export class StatusCartComponent implements OnInit, OnChanges/*, DoCheck*/ {

  @Input() price: number;
  @Input() shopModel: Array<Product>;
  @Input() add: EventEmitter<null> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  confirm() {
    this.add.emit();
  }

  ngDoCheck(){
    console.log('Interacción de usuario');
  }

}
