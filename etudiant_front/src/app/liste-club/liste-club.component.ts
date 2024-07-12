import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-club.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-club',
  templateUrl: './liste-club.component.html',
  styleUrls: ['./liste-club.component.css']
})
export class ListeClubComponent implements OnInit{

 
    constructor(public shared: SharedService){}
  
    clubs:any;
  
  
    ngOnInit(): void {
     this.shared.getAllClubs()
          .subscribe(res=>{
            this.clubs=res;
            console.log("Clubs are : ",res);
            
          },err=>{
            console.log(err);
            
          }
          )
    }
  
    delete(id:any){
      this.shared.deleteClub(id)
      .subscribe(res=>
        { console.log(res);
          Swal.fire({
            position:'center',
            icon:'success',
            title :'Club deleted succesuffully',
            showCancelButton:true,
            timer:2000
          })
          this.ngOnInit();
        }
        ,err=>{console.log(err);
          Swal.fire({
            position:'center',
            icon:'error',
            title :'Error in Deleting  club',
            showCancelButton:true,
            timer:2000
          })
        }) 
    }
  
   
  }
  

