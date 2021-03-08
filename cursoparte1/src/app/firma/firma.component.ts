import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-firma',
  templateUrl: './firma.component.html',
  styleUrls: ['./firma.component.css']
})
export class FirmaComponent implements OnInit {

  // Para exigir que llegue esta propiedad
  @Input() colorNombre: string;

  constructor() { }

  ngOnInit(): void {
  }
}
