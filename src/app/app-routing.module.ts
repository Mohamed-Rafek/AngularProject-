import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { ErrorComponent } from './components/error/error.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { UpdateComponent } from './components/update/update.component';


const routes: Routes = [
  {path:"", component:UsersComponent},
  {path:"users/:id", component:AlbumsComponent},
  {path:"albums/:id", component:PhotosComponent},
  {path:"update/:id", component:UpdateComponent},


  {path:"**", component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
