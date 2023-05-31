import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly client:HttpClient) { }

  // private readonly Base_URL="https://jsonplaceholder.typicode.com"
  private readonly Base_URL="http://localhost:3000"


  getAllUsers(){
    return this.client.get(this.Base_URL+'/users');
  }
  getUserById(id:any){
    return this.client.get(this.Base_URL+"/users"+"/"+id);
  }
  getAlbumsByUserId(id:any){
    return this.client.get(this.Base_URL+"/users"+"/"+id+"/albums");
  }
  getPhotosByAlbumId(id:any){
    return this.client.get(this.Base_URL+"/albums"+"/"+id+"/photos");
  }
  AddUser(newUser:any){
    return this.client.post(this.Base_URL+"/users",newUser);
  }
  UpdateUser(userUpdated:any, id:any){
    return this.client.put(this.Base_URL+"/users"+"/"+id, userUpdated)
  }
  DeleteUser(id:any){
   return this.client.delete(this.Base_URL+"/users"+"/"+id)
  }

}
