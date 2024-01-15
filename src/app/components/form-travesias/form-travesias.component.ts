import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-travesias',
  templateUrl: './form-travesias.component.html',
  styleUrls: ['./form-travesias.component.css']
})
export class FormTravesiasComponent {

  public travesiasForm: FormGroup;

  constructor (private formBuilder: FormBuilder){
    this.buildForm();
  }

  private buildForm (): void{
    
    const minLength: number = 8;

    this.travesiasForm = this.formBuilder.group({
      origen: [,Validators.required],
      salida: [,Validators.required],
      destino: [,Validators.required],
      llegada: [,Validators.required],
      fecha: [,Validators.required],
      plazas: [, Validators.required]
    });
  }

  public publicar_travesia(): void{
    alert("Travesia creada con éxito");
  }
}
