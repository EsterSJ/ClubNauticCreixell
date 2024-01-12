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

  public social (){
    this.router.navigateByUrl('/social');
  }

}
