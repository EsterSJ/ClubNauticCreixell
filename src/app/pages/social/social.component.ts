import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})

export class SocialComponent implements OnInit{

  // private nombreMeses: string[] = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
  private nombreMeses: string[];
  
  public fechaActual: Date;
  public diaActual: number;
  public mesActual: number;
  public anyoActual: number; 

  public fechas: HTMLElement;
  public mes: HTMLElement;
  public anyo: HTMLElement;

  ngOnInit(): void{

    this.fechaActual = new Date();
    this.diaActual = this.fechaActual.getDate();
    this.mesActual = this.fechaActual.getMonth();
    this.anyoActual = this.fechaActual.getFullYear();

    this.fechas = document.getElementById('fechas');
    this.mes = document.getElementById('mes');
    this.anyo = document.getElementById('anyo');

    let mesAnterior = document.getElementById('mes__anterior');
    let mesSiguiente =  document.getElementById('mes__siguiente');

    this.mes.textContent = this.nombreMeses[this.mesActual];
    this.anyo.textContent = this.anyoActual.toString();

    mesAnterior.addEventListener('click', ()=> this.anterior());
    mesSiguiente.addEventListener('click', ()=> this.siguiente());


    this.mostrarMeses(this.mesActual);

  }

  constructor(private translocoService: TranslocoService) {
    this.nombreMeses = [
      this.translocoService.translate('MESES.ENERO'),
      this.translocoService.translate('MESES.FEBRERO'),
      this.translocoService.translate('MESES.MARZO'),
      this.translocoService.translate('MESES.ABRIL'),
      this.translocoService.translate('MESES.MAYO'),
      this.translocoService.translate('MESES.JUNIO'),
      this.translocoService.translate('MESES.JULIO'),
      this.translocoService.translate('MESES.AGOSTO'),
      this.translocoService.translate('MESES.SEPTIEMBRE'),
      this.translocoService.translate('MESES.OCTUBRE'),
      this.translocoService.translate('MESES.NOVIEMBRE'),
      this.translocoService.translate('MESES.DICIEMBRE')
    ];
  }

  public mostrarMeses (mes: number):void {
    for(let i = this.diaSemanaComienzo(); i>0; i--){
      this.fechas.innerHTML += ` <div class="day item" style="opacity: .2; text-decoration: line-through">${this.diasDelMes(this.mesActual-1)-(i-1)} `
    }

    for(let day=1; day<=this.diasDelMes(mes); day++){
      this.fechas.innerHTML += ` <div class="day item" style="padding: 4px; border-radius: 4px; border: 1px solid var(--colorGris)">${day} `
    }
  }

  public diasDelMes (mes: number): number{
    if (mes == -1) {mes = 11} 

    if (mes == 0 || mes == 2 || mes == 4 || mes == 6 || mes == 7 || mes == 9 || mes == 11){
      return 31;
    }
    else if (mes == 3 || mes == 5 || mes == 8 || mes == 10){
      return 30;
    }
    else{
      return this.esBisiesto() ? 29 : 28;
    }
  }

  public esBisiesto (): boolean{
    return ((this.anyoActual % 100 != 0 && this.anyoActual % 4 == 0) || (this.anyoActual % 400 == 0));
  }

  public diaSemanaComienzo(): number{
    let numDia: Date = new Date(this.anyoActual, this.mesActual, 1);
    return (numDia.getDay()-1 == -1) ? 6 : numDia.getDay()-1;
  }

  public anterior (): void{
    if (this.mesActual != 0){
      this.mesActual--;
    }
    else{
      this.mesActual = 11;
      this.anyoActual--;
    }

    this.setNuevaFecha();

  }

  public siguiente (): void{
    if (this.mesActual != 11){
      this.mesActual++;
    }
    else{
      this.mesActual = 0;
      this.anyoActual++;
    }

    this.setNuevaFecha();
  }

  public setNuevaFecha(): void{
    this.fechaActual.setFullYear(this.anyoActual,this.mesActual,this.diaActual);
    this.mes.textContent = this.nombreMeses[this.mesActual];
    this.anyo.textContent = this.anyoActual.toString();

    this.fechas.textContent = '';
    this.mostrarMeses(this.mesActual);
  }

}

