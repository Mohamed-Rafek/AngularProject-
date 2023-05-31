import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {

  Id:any=0;
  
  photos:any;
  constructor(Route:ActivatedRoute, private service:UsersService){
    this.Id=Route.snapshot.params["id"];
  }
  ngOnInit(): void {
   
    this.service.getPhotosByAlbumId(this.Id).subscribe(
      {
        next:(data)=>{ this.photos=data},
        error:(err)=>{console.log(err)}
      }
    
    )
  }
}
