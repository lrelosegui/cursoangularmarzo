import { Component } from '@angular/core';
import { Builder } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cursoparte1';
  condicion : Boolean;
  textoalternativo: String;
  so: String;
  color: String;
  colorActivo : String;
}
