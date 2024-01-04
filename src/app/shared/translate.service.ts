import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  constructor(private translocoService: TranslocoService) {}

  setLanguage(language: string) {
    this.translocoService.setActiveLang(language);
  }

}
