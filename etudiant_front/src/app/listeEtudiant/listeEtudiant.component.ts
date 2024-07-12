import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-listeEtudiant',
  templateUrl: './listeEtudiant.component.html',
  styleUrls: ['./listeEtudiant.component.css']
})
export class ListeEtudiantComponent implements OnInit{

 
    constructor(public shared: SharedService){}
  
    etudiants:any;
  
  
    ngOnInit(): void {
     this.shared.getAllEtudiants()
          .subscribe(res=>{
            this.etudiants=res;
            console.log("Etudiants are : ",res);
            
          },err=>{
            console.log(err);
            
          }
          )
    }
  
    delete(id:any){
      this.shared.deleteEtudiant(id)
      .subscribe(res=>
        { console.log(res);
          Swal.fire({
            position:'center',
            icon:'success',
            title :'Etudiant deleted succesuffully',
            showCancelButton:true,
            timer:2000
          })
          this.ngOnInit();
        }
        ,err=>{console.log(err);
          Swal.fire({
            position:'center',
            icon:'error',
            title :'Error in Deleting  etudiant',
            showCancelButton:true,
            timer:2000
          })
        }) 
    }
  
   
  }
  










