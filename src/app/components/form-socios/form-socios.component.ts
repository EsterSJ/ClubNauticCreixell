import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-socios',
  templateUrl: './form-socios.component.html',
  styleUrls: ['./form-socios.component.css']
})
export class FormSociosComponent {

  public sociosForm: FormGroup;
  public enviado: boolean = false;
  private minLength: number = 8;

  constructor (private formBuilder: FormBuilder){
    this.sociosForm = this.formBuilder.group({
      nombre: [,Validators.required],
      apellidos: [,Validators.required],
      email: [,[Validators.required, Validators.email]],
      contrasenya: [,[Validators.required, Validators.minLength(this.minLength)]],
    });
  }

  onSubmit(){
    this.enviado = true;

    if (this.sociosForm.invalid){
      return
    }
    alert ("Alta de nuevo socio creada con éxito");
  }

  onReset(){
    this.enviado = false;
    this.sociosForm.reset();
  }

}
