import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

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
  
}
