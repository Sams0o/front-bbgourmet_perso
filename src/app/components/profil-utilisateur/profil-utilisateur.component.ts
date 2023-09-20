import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styleUrls: ['./profil-utilisateur.component.css'],
})
export class ProfilUtilisateurComponent {
  @Input() profil!: Utilisateur;

  constructor(
    private utilisateurService: UtilisateurService,
    private router: Router
  ) {}

  getInitials(): string {
    if (this.profil.nom && this.profil.prenom) {
      return this.profil.nom.charAt(0) + this.profil.prenom.charAt(0);
    }
    return '';
  }

  deconnexion() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}
