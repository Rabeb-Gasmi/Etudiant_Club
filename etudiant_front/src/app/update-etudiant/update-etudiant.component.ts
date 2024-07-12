import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {
    id: any;
    etudiant : any;
  
    constructor(public shared :SharedService,private act : ActivatedRoute,private router : Router) {}
    ngOnInit(): void {
      this.id=this.act.snapshot.paramMap.get('id');
      this.shared.getEtudiantById(this.id)
          .subscribe(res=>{
              this.etudiant = res;
              console.log("etudiant is :",this.etudiant);
              
          })
    }
  
  
  
  
    
    update(){
      this.shared.updateEtudiant(this.id,this.etudiant)
      .subscribe(res=>
        {
          console.log(res);
          this.etudiant={
            name : '',
            lastName :'',
            age:'',
            email:'',
            password:'',
            niveau:'',
            image :''
          }
          Swal.fire({
            position:'center',
            icon:'success',
            title :'Etudiant Updated succesuffully',
            showCancelButton:true,
            timer:2000
          })
          this.router.navigate(['/liste_etudiant'])
        }
        ,err=>{console.log(err);
          Swal.fire({
            position:'center',
            icon:'error',
            title :'Error in etudiant  Hero',
            showCancelButton:true,
            timer:2000
          })
        })
    }
    
  }
  



