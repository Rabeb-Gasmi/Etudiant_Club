import { Component } from '@angular/core';
import { SharedService } from '../shared-club.service';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-ajout-club',
  templateUrl: './ajout-club.component.html',
  styleUrls: ['./ajout-club.component.css']
})
export class AjoutClubComponent {
constructor(public shared :SharedService,private act : ActivatedRoute,private router : Router) {}
  
  
club={
  name : '',
  nombreLimit:'',
  image :''
}



ajout(){
  this.shared.createClub(this.club)
      .subscribe(res=>
      {
        console.log(res);
        this.club={
          name : '',
          nombreLimit:'',
          image :''
        }
        Swal.fire({
          position:'center',
          icon:'success',
          title :'Club Added succesuffully',
          showCancelButton:true,
          timer:2000
        })
       
        this.router.navigate(['/liste_club'])

      }
      ,(err)=>{console.log(err);
        Swal.fire({
          position:'center',
          icon:'error',
          title :'Error in adding  Club',
          showCancelButton:true,
          timer:2000
        })
      })
  
  
}
}










