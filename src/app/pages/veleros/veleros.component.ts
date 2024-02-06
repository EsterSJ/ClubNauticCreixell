import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-veleros',
  templateUrl: './veleros.component.html',
  styleUrls: ['./veleros.component.css']
})
export class VelerosComponent implements OnInit {

  public botonSeleccionado: number;

  ngOnInit(): void {

  }

  constructor (private router: Router, public translocoService: TranslocoService){
    this.botonSeleccionado = 0;
  }

  public seleccionarBoton (indice: number){
    this.botonSeleccionado = indice;
  }

  public confirmarReserva(){

    Swal.fire({
      title: "¿Quieres reservar en exclusiva?",
      showCloseButton: true,
      showDenyButton: true,
      confirmButtonColor: "#4364AB",
      denyButtonColor: "#2CBCA4",
      confirmButtonText: "Si",
      denyButtonText: `No`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Reserva en exclusiva", "Ponte en contacto con el club para efectuar el pago", "success");
      } else if (result.isDenied) {
        Swal.fire("Reserva compartida", "Ponte en contacto con el club para efectuar el pago", "success");
      }
    });
  }
  
}
