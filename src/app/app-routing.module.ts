import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { SocialComponent } from './pages/social/social.component';
import { VelerosComponent } from './pages/veleros/veleros.component';
import { TravesiasComponent } from './pages/travesias/travesias.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'reservas', component: ReservasComponent},
  {path: 'social', component: SocialComponent},
  {path: 'veleros', component: VelerosComponent},
  {path: 'travesias', component: TravesiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
