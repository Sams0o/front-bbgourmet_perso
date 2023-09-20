import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styleUrls: ['./profil-utilisateur.component.css']
})
export class ProfilUtilisateurComponent implements OnInit{
  profil!: Utilisateur;

  constructor(private utilisateurService: UtilisateurService) {}

  ngOnInit() {
      this.utilisateurService.infoProfilUtilisateur().subscribe({
        next: (data: Utilisateur) => {
          this.profil = data;
          console.log('Profil chargé', this.profil);
          
        },
        error: (error) => {
          console.log('Récupération des données de profil non aboutit:', error);
          
        }     
      })
    }

    getInitials(): string {
      if (this.profil.nom && this.profil.prenom) {
         return this.profil.nom.charAt(0) + this.profil.prenom.charAt(0);
  }
  return '';
  }
}
