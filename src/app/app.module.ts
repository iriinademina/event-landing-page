import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainFeaturesComponent } from './components/main-features/main-features.component';
import { GuestsComponent } from './components/guests/guests.component';
import { SwiperModule } from "swiper/angular";
import { PartnersComponent } from './components/partners/partners.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { NguCarouselModule } from '@ngu/carousel';

import {CarouselModule} from "ngx-carousel-lib";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainFeaturesComponent,
    GuestsComponent,
    PartnersComponent,
    BlogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    BrowserAnimationsModule,
    CarouselModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
