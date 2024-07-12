import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-club.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-club',
  templateUrl: './update-club.component.html',
  styleUrls: ['./update-club.component.css']
})
   export class UpdateClubComponent implements OnInit {
      id: any;
      club : any;
    
      constructor(public shared :SharedService,private act : ActivatedRoute,private router : Router) {}
      ngOnInit(): void {
        this.id=this.act.snapshot.paramMap.get('id');
        this.shared.getClubById(this.id)
            .subscribe((res: any)=>{
                this.club = res;
                console.log("club is :",this.club);
                
            })
      }
    
    
    
    
      
      update(){
        this.shared.updateClub(this.id,this.club)
        .subscribe((res: any)=>
          {
            console.log(res);
            this.club={
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
              title :'Club Updated succesuffully',
              showCancelButton:true,
              timer:2000
            })
            this.router.navigate(['/liste_club'])
          }
          ,(err)=>{console.log(err);
            Swal.fire({
              position:'center',
              icon:'error',
              title :'Error in club ',
              showCancelButton:true,
              timer:2000
            })
          })
      }
      
    }
    
  
  
  
  
