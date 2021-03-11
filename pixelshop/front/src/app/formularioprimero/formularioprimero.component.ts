import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateUrl } from '../validators/url.validators'
import { ValidateFakeEmail } from '../validators/fakeemail.validators'

@Component({
  selector: 'app-formularioprimero',
  templateUrl: './formularioprimero.component.html',
  styleUrls: ['./formularioprimero.component.css']
})
export class FormularioprimeroComponent implements OnInit {

  formulario: FormGroup;
  regpattern = '[a-z]*';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      // Sin validaciones
      /* user: 'Miusuario',
      password: '' */
      // Con validaciones
      user: ['Lorena', [Validators.required, Validators.minLength(2), Validators.pattern(this.regpattern)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      url: ['', [Validators.required, ValidateUrl]],
      email: ['', [Validators.required, Validators.email, ValidateFakeEmail]]
    });
  }

  // Este método es propio de los formularios, no se ha declarado en la vista
  onSubmit(_datosForm) {
    console.log(_datosForm.value);
  }
}
