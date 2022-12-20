import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { HeaderComponent } from './header/header.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { CategoriesComponent } from './categories/categories.component';
import { PodiumComponent } from './podium/podium.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AnnouncementsComponent,
    CategoriesComponent,
    PodiumComponent,
    FooterComponent
  ],
  //Permite llamar al componente del modulo sections en otro modulo 
  exports: [
    HeaderComponent,
    AnnouncementsComponent,
    CategoriesComponent,
    PodiumComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SectionsModule { }
