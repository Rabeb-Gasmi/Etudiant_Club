import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';



@Component({
  selector: 'app-ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.css']
})
export class AjoutEtudiantComponent {
  constructor(public shared :SharedService,private act : ActivatedRoute,private router : Router) {}
  
  
    etudiant={
      name : '',
      lastName :'',
      age:'',
      email:'',
      password:'',
      niveau:'',
      image :'',
      // clubId:''
    }
  
    
  
    ajout(){
      this.shared.createEtudiant(this.etudiant)
          .subscribe(res=>
          {
            console.log(res);
            this.etudiant={
              name : '',
              lastName :'',
              age: '',
              email:'',
              password:'',
              niveau:'',
              image :'',
              // clubId:''
            }
            Swal.fire({
              position:'center',
              icon:'success',
              title :'Etudiant Added succesuffully',
              showCancelButton:true,
              timer:2000
            })
           
            this.router.navigate(['/liste_etudiant'])

          }
          ,err=>{console.log(err);
            Swal.fire({
              position:'center',
              icon:'error',
              title :'Error in adding  Etudiant',
              showCancelButton:true,
              timer:2000
            })
          })
      
      
    }
  }
  


