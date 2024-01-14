import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialComponent } from './pages/social/social.component';
import { VelerosComponent } from './pages/veleros/veleros.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservasComponent,
    HeaderComponent,
    SocialComponent,
    VelerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
