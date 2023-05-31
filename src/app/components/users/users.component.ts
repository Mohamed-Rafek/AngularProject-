import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
users:any;
constructor(private service:UsersService){
  service.getAllUsers().subscribe(
    {
     next:(data)=>{
       this.users=data;
     },
     error:(err)=>{console.log(err)}
    }
   )
  }


Add(name:any, email:any, phone:any,street:any, suite:any, city:any){

  let emailValidation=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let phoneValidation=/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
  
  if (!email.match(emailValidation)) {
    alert("enter valid email")
    
  }
  else if(!phone.match(phoneValidation)) {
    alert("enter valid phone")

  } 
   else {
    let newUser={name, email, phone,address:{street, suite, city}}

    this.service.AddUser(newUser).subscribe(()=>{ this.service.getAllUsers().subscribe(
      {
       next:(data)=>{
         this.users=data;
       },
       error:(err)=>{console.log(err)}
      }
     )})
    
    
  }
}
DeleteUser(user_id: any){
this.service.DeleteUser(user_id).subscribe(
  ()=>{ this.service.getAllUsers().subscribe(
    {
     next:(data)=>{
       this.users=data;
     },
     error:(err)=>{console.log(err)}
    }
   )}
)
}





}
