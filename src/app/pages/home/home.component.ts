import { Component } from '@angular/core';
import { TranslateService } from 'src/app/shared/translate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'angular-i18n-transloco';

  constructor(private translationService: TranslateService) {
    this.selectLanguage();
  }

  selectLanguage(language: string = 'es') {
    this.translationService.setLanguage(language);
  }
}
