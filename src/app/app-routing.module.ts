import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './MainPortal/Gallery/gallery/gallery.component';
import { HomeComponent } from './MainPortal/home/home/home.component';
import { MenuComponent } from './MainPortal/Menu/menu/menu.component';
import { ReservationComponent } from './MainPortal/Reservation/reservation/reservation.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  }
  ,
  {
    path:'home',component:HomeComponent
  },

  {
    path:'menu',component:MenuComponent
  },

  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'Reservation',component:ReservationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
