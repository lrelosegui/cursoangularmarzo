import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  numrandom: Number = Math.floor(Math.random() * 10);
  miamarillo: String = 'Yellow';

  constructor() { }

  ngOnInit(): void {
  }

  generarRandom(): String {
    return Math.floor(Math.random() * 255).toString(16);
  }

  colorHex(): String {
    return '#' + this.generarRandom() + this.generarRandom() + this.generarRandom();
  }

}
