import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import { ListeEtudiantComponent } from './listeEtudiant/listeEtudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { AjoutClubComponent } from './ajout-club/ajout-club.component';
import { ListeClubComponent } from './liste-club/liste-club.component';
import { UpdateClubComponent } from './update-club/update-club.component';

const routes: Routes = [
   {path: '', component: ListeEtudiantComponent },
  
  {path : 'ajout_etudiant',component:AjoutEtudiantComponent},
  {path : 'liste_etudiant',component:ListeEtudiantComponent},
  {path : 'updateEtudiant/:id',component:UpdateEtudiantComponent},
  {path : 'ajout_club', component:AjoutClubComponent},
  {path : 'liste_club', component:ListeClubComponent},
  {path : 'updateClub/:id',component:UpdateClubComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
