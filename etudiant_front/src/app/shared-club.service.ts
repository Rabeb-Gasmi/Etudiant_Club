import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor( public http : HttpClient) { }
  
  club:any[] = [];


  public url ='http://127.0.0.1:3000/club/'


  createClub(club :any){
    return this.http.post(this.url+'ajout',club)
  }
  getAllClubs(){
    return this.http.get(this.url+"all");
  }
  deleteClub(id:any){
    return this.http.delete(this.url+"supprimer/"+id);
  }

  getClubById(id:any){
    return this.http.get(this.url+"getbyid/"+id);
  }

  updateClub(id:any, club: any) {
    return this.http.put(this.url+"update/"+id,club);
  }



}
