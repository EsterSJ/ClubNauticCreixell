import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-travesias',
  templateUrl: './form-travesias.component.html',
  styleUrls: ['./form-travesias.component.css']
})
export class FormTravesiasComponent implements OnInit{

  public travesiasForm: FormGroup;
  public enviado: boolean = false;

  constructor (private formBuilder: FormBuilder, private router: Router){
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
      return
    }
    Swal.fire({
      text: "Gracias por publicar tu travesía",
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
    this.router.navigateByUrl('/reservas');
  }

  onReset(){
    this.enviado = false;
    this.travesiasForm.reset();
  }

}
