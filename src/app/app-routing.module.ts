import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCommencerComponent } from './pages/page-commencer/page-commencer.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageAlimentComponent } from './pages/page-aliment/page-aliment.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { PageUtilisateurComponent } from './pages/page-utilisateur/page-utilisateur.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PageAccueilComponent },
  { path: 'commencer', component: PageCommencerComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'profil-utilisateur', component: PageUtilisateurComponent},
  { path: 'aliments', component: PageAlimentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
