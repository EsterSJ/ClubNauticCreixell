import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
      rol: [],
      nombre: [,Validators.required],
      apellidos: [,Validators.required],
      email: [,[Validators.required, Validators.email]],
      contrasenya: [,[Validators.required, Validators.minLength(this.minLength)]]
    });
  }

  onSubmit(){
    this.enviado = true;

    if (this.sociosForm.invalid){
      return
    }
    Swal.fire({
      text: "Nuevo socio creado",
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }

  onReset(){
    this.enviado = false;
    this.sociosForm.reset();
  }

}
