import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit{
  public diasSemana: string[] = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO'];

  public nombreMeses: string[] = [
    'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'
  ];

  public fechaActual: Date;
  public diasDelMes: number[][] = [[]];
  public diasSeleccionados: Set<number>;

  // Mantener un conjunto de días seleccionados para cada mes
  public diasSeleccionadosPorMes: Map<number, Set<number>> = new Map();

  ngOnInit(): void {
    this.fechaActual = new Date();
    this.actualizarFecha();
  }

  constructor (private router: Router, public translocoService: TranslocoService){
  }

  private actualizarFecha(): void {
    const primerDia = new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth(), 1);
    const ultimoDia = new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth() + 1, 0);

    let numeroDias = 1;
    this.diasDelMes = [[]];

    for (let i = 0; i < primerDia.getDay(); i++) {
      this.diasDelMes[0].push(null); // Días del mes anterior
    }

    for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {
      if (this.diasDelMes[this.diasDelMes.length - 1].length === 7) {
        this.diasDelMes.push([]);
      }
      this.diasDelMes[this.diasDelMes.length - 1].push(numeroDias++);
    }

    while (this.diasDelMes[this.diasDelMes.length - 1].length < 7) {
      this.diasDelMes[this.diasDelMes.length - 1].push(null); // Días del mes siguiente
    }

    // Llenar el conjunto de días seleccionados para el mes actual
    this.diasSeleccionados = this.getDiasSeleccionados(this.fechaActual.getMonth());
  }

  public cambiarColor(dia: number): void {

    // Usar el conjunto de días seleccionados correspondiente al mes actual
    this.diasSeleccionados = this.getDiasSeleccionados(this.fechaActual.getMonth());

    if (this.diasSeleccionados.has(dia)) {
      this.diasSeleccionados.delete(dia);
    } else {
      this.diasSeleccionados.add(dia);
    }

    // Actualizar el conjunto de días seleccionados para el mes actual
    this.diasSeleccionadosPorMes.set(this.fechaActual.getMonth(), this.diasSeleccionados);

  }

  private getDiasSeleccionados(mes: number): Set<number> {
    if (!this.diasSeleccionadosPorMes.has(mes)) {
      this.diasSeleccionadosPorMes.set(mes, new Set<number>());
    }
    return this.diasSeleccionadosPorMes.get(mes);
  }

  public anterior(): void {
    this.fechaActual.setMonth(this.fechaActual.getMonth() - 1);
    this.actualizarFecha();
  }

  public siguiente(): void {
    this.fechaActual.setMonth(this.fechaActual.getMonth() + 1);
    this.actualizarFecha();
  }
}
