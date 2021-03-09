import { ConfirmComponent } from '../confirm/confirm.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from "../interface/product";
import { Shop } from "../models/shop.model";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit {

  @ViewChild(ConfirmComponent, { static: false })
  confirmChild: ConfirmComponent;

  errorHttp: boolean;
  shopModel: Shop = new Shop();
  boughtItems: Array<Product>;

  private shopSubscription: Subscription;

  constructor(private http: HttpClient) {
    this.boughtItems = []
    this.shopModel = { shopItems: [] };
  }

  ngOnInit(): void {
    this.shopSubscription = this.http.get('assets/cursos.json').subscribe(
      (respuesta: Response) => { this.shopModel.shopItems = respuesta; },
      (respuesta: Response) => { this.errorHttp = true }
    );
  }

  ngOnDestroy() {
    this.shopSubscription.unsubscribe();
  }

  clickItem(curso) {
    this.boughtItems.push(curso);
  }

  cursoMatriculado(_event: Product) {
    // console.log(_event)
    this.clickItem(_event)
    this.onConfirm();
    this.confirmChild.isDisabled = false;
  }

  onConfirm() {
    alert('Has añadido un nuevo curso');
  }
  

  finalPrice() {
    if (this.boughtItems) {
      return this.boughtItems.reduce(
        (prev: number, item: Product) => prev + item.price, 0
      );
    }
  }

}
