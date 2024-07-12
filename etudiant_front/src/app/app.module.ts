import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import { ListeEtudiantComponent } from './listeEtudiant/listeEtudiant.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { ClubComponent } from './club/club.component';
import { ListeClubComponent } from './liste-club/liste-club.component';
import { AjoutClubComponent } from './ajout-club/ajout-club.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateClubComponent } from './update-club/update-club.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    NavbarComponent,
    AjoutEtudiantComponent,
    ListeEtudiantComponent,
    UpdateEtudiantComponent,
    ClubComponent,
    ListeClubComponent,
    AjoutClubComponent,
    FooterComponent,
    UpdateClubComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
