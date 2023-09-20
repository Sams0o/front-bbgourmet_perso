import { Component } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-utilisateur',
  templateUrl: './page-utilisateur.component.html',
  styleUrls: ['./page-utilisateur.component.css'],
})
export class PageUtilisateurComponent {
  utilisateur!: Utilisateur;

  constructor(private utilisateurService: UtilisateurService, private router: Router) {}

  ngOnInit() {
    this.utilisateurService.infoProfilUtilisateur().subscribe({
      next: (data: Utilisateur) => {
        this.utilisateur = data;
        console.log('Profil chargé', this.utilisateur);
      },
      error: (error) => {
        console.log('Récupération des données de profil non aboutit:', error);
      },
    });
  }

 
}
