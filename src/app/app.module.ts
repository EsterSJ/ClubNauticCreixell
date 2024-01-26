import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialComponent } from './pages/social/social.component';
import { VelerosComponent } from './pages/veleros/veleros.component';
import { TravesiasComponent } from './pages/travesias/travesias.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { FormTravesiasComponent } from './components/form-travesias/form-travesias.component';
import { FormSociosComponent } from './components/form-socios/form-socios.component';
import { AltaSociosComponent } from './pages/alta-socios/alta-socios.component';
import { ListaSociosComponent } from './pages/lista-socios/lista-socios.component';
import { TarjetaSocioComponent } from './components/tarjeta-socio/tarjeta-socio.component';
import { FooterComponent } from './components/footer/footer.component';
import { MisReservasComponent } from './pages/mis-reservas/mis-reservas.component';
import { TarjetaReservaComponent } from './components/tarjeta-reserva/tarjeta-reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservasComponent,
    HeaderComponent,
    SocialComponent,
    VelerosComponent,
    TravesiasComponent,
    CalendarioComponent,
    FormTravesiasComponent,
    FormSociosComponent,
    AltaSociosComponent,
    ListaSociosComponent,
    TarjetaSocioComponent,
    FooterComponent,
    MisReservasComponent,
    TarjetaReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
