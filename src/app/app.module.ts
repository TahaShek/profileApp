import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MainPortal/Header/header/header.component';
import { FooterComponent } from './MainPortal/footer/footer/footer.component';
import { HomeComponent } from './MainPortal/home/home/home.component';
import { MenuComponent } from './MainPortal/Menu/menu/menu.component';
import { GalleryComponent } from './MainPortal/Gallery/gallery/gallery.component';
import { ReservationComponent } from './MainPortal/Reservation/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    GalleryComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
