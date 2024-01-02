import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'angular-i18n-transloco';
  selectLang = 'es';
  constructor(private translocoService: TranslocoService) {
    this.selectLanguage();
  }

  selectLanguage(language: string = this.selectLang) {
    this.translocoService.setActiveLang( language );
  }
}
