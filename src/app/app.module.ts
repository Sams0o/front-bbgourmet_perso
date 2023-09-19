import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageCommencerComponent } from './pages/page-commencer/page-commencer.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageUtilisateurComponent } from './pages/page-utilisateur/page-utilisateur.component';
import { PageAlimentComponent } from './pages/page-aliment/page-aliment.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ProfilUtilisateurComponent } from './components/profil-utilisateur/profil-utilisateur.component';
import { ProfilEnfantComponent } from './components/profil-enfant/profil-enfant.component';
import { CardEnfantComponent } from './components/card-enfant/card-enfant.component';
import { AjoutEnfantComponent } from './components/ajout-enfant/ajout-enfant.component';
import { ModifEnfantComponent } from './components/modif-enfant/modif-enfant.component';
import { ListeAlimentComponent } from './components/liste-aliment/liste-aliment.component';
import { AjoutAlimentComponent } from './components/ajout-aliment/ajout-aliment.component';
import { ModifAlimentComponent } from './components/modif-aliment/modif-aliment.component';
import { SupprAlimentComponent } from './components/suppr-aliment/suppr-aliment.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageCommencerComponent,
    PageAccueilComponent,
    PageUtilisateurComponent,
    PageAlimentComponent,
    NavbarComponent,
    FooterComponent,
    PresentationComponent,
    InscriptionComponent,
    ConnexionComponent,
    ProfilUtilisateurComponent,
    ProfilEnfantComponent,
    CardEnfantComponent,
    AjoutEnfantComponent,
    ModifEnfantComponent,
    ListeAlimentComponent,
    AjoutAlimentComponent,
    ModifAlimentComponent,
    SupprAlimentComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
