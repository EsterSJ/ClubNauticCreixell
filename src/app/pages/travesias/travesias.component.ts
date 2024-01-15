import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-travesias',
  templateUrl: './travesias.component.html',
  styleUrls: ['./travesias.component.css']
})
export class TravesiasComponent {

  public botonSeleccionado: number;

  constructor (private router: Router, public translocoService: TranslocoService){
    this.botonSeleccionado = 0;
  }

  public seleccionarBoton (indice: number){
    this.botonSeleccionado = indice;
  }

}
