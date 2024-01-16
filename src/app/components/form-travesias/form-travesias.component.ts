import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-travesias',
  templateUrl: './form-travesias.component.html',
  styleUrls: ['./form-travesias.component.css']
})
export class FormTravesiasComponent implements OnInit{

  public travesiasForm: FormGroup;
  public enviado: boolean = false;

  constructor (private formBuilder: FormBuilder){
    this.travesiasForm = this.formBuilder.group({
      origen: [,Validators.required],
      hora_salida: [,Validators.required],
      destino: [,Validators.required],
      hora_llegada: [,Validators.required],
      fecha: [,Validators.required],
      velero: [,Validators.required],
      plazas: [, Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.enviado = true;

    if (this.travesiasForm.invalid){
      console.log("Formulario invalido");
      return
    }
    alert ("Travesia creada con éxito");
  }

  onReset(){
    this.enviado = false;
    this.travesiasForm.reset();
  }

}
