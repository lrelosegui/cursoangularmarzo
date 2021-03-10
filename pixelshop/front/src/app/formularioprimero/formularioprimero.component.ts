import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularioprimero',
  templateUrl: './formularioprimero.component.html',
  styleUrls: ['./formularioprimero.component.css']
})
export class FormularioprimeroComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      // Sin validaciones
      /* user: 'Miusuario',
      password: ''*/
      user: ['David', [Validators.required, Validators.minLength(2)]],
      password: ['', Validators.required]
    });
  }

  onSubmit(_datosForm) {
    console.log(_datosForm.value);
  }
}
