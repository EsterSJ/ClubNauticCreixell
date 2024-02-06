import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from 'src/app/shared/translate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'angular-i18n-transloco';

  public loginForm: FormGroup;
  public enviado: boolean = false;
  private minLength: number = 8;

  constructor(private translationService: TranslateService, public router: Router, private formBuilder: FormBuilder) {
    this.selectLanguage();

    this.loginForm = this.formBuilder.group({
      email: [,[Validators.required, Validators.email]],
      contrasenya: [,[Validators.required, Validators.minLength(this.minLength)]]
    });
  }

  onSubmit(){
    this.enviado = true;

    if (this.loginForm.invalid){
      return
    }
    this.router.navigateByUrl('/reservas');
  }

  onReset(){
    this.enviado = false;
    this.loginForm.reset();
  }

  selectLanguage(language: string = 'es') {
    this.translationService.setLanguage(language);
  }

  public reservas (){
    this.router.navigateByUrl('/reservas');
  }
}


