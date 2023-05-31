import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  UserId:any;
  user:any;
  users:any;

  constructor(private Route:ActivatedRoute, private service:UsersService){
    this.UserId=this.Route.snapshot.params["id"]
  }

  ngOnInit(): void {
   if (this.UserId) {
    this.service.getUserById(this.UserId).subscribe({
      next:(data)=>{this.user=data},
      error:(err)=>{console.log(err)
        
      }
    })
   }
  }
   update(name:any, email:any, phone:any,street:any,suite:any,city:any){
    let emailValidation=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let phoneValidation=/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;

  if (!email.match(emailValidation)) {
    alert("enter valid email")
    
  }
  else if(!phone.match(phoneValidation)) {
    alert("enter valid phone")

    
  } 
   else {
    let userUpdated={name, email, phone,address:{street, suite, city}}
    this.service.UpdateUser(userUpdated,this.UserId).subscribe(()=>{ this.service.getAllUsers().subscribe(
      {
       next:(data)=>{
         this.users=data;
       },
       error:(err)=>{console.log(err)}
      }
     )})
   }
  

  }
}
