import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  getClubById(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor( public http : HttpClient) { }
  
  etudiant:any[] = [];

  public url ='http://127.0.0.1:3000/etudiant/'


  createEtudiant(etudiant :any){
    return this.http.post(this.url+'ajout',etudiant)
  }
  getAllEtudiants(){
    return this.http.get(this.url+"all");
  }
  deleteEtudiant(id:any){
    return this.http.delete(this.url+"supprimer/"+id);
  }

  getEtudiantById(id:any){
    return this.http.get(this.url+"getbyid/"+id);
  }

  updateEtudiant(id:any, etudiant: any) {
    return this.http.put(this.url+"update/"+id,etudiant);
  }



}
