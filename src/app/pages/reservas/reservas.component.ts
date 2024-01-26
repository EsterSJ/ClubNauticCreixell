import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {

  constructor(public router: Router){

  }

  public veleros():void {
    this.router.navigateByUrl('/veleros');
  }

  public social(): void{
    this.router.navigateByUrl('/social');
  }

  public travesias(): void{
    this.router.navigateByUrl('/travesias');
  }

  public misReservas(): void{
    this.router.navigateByUrl('/misReservas');
  }

}
