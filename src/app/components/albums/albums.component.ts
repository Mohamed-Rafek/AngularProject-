import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {

  Id:any=0;
  user:any;
  albums:any;
  constructor(Route:ActivatedRoute, private service:UsersService){
    this.Id=Route.snapshot.params["id"];
  }
  ngOnInit(): void {
   
    this.service.getUserById(this.Id).subscribe(
      {
        next:(data)=>{ this.user=data},
        error:(err)=>{console.log(err)}
      }
    
    )
  
   
    this.service.getAlbumsByUserId(this.Id).subscribe(
      {
        next:(dataAlbum)=>{ this.albums=dataAlbum},
        error:(err)=>{console.log(err)}
      }
    
    )
  }
}
