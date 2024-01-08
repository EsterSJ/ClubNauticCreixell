import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from 'src/app/shared/translate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'angular-i18n-transloco';

  constructor(private translationService: TranslateService, public router: Router) {
    this.selectLanguage();
  }

  selectLanguage(language: string = 'es') {
    this.translationService.setLanguage(language);
  }

  public reservas (){
    this.router.navigateByUrl('/reservas');
  }
}


