import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { HeaderComponent } from './header/header.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { CategoriesComponent } from './categories/categories.component';
import { PodiumComponent } from './podium/podium.component';
import { FooterComponent } from './footer/footer.component';
import { QuienesComponent } from './quienes/quienes.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AnnouncementsComponent,
    CategoriesComponent,
    PodiumComponent,
    FooterComponent,
    QuienesComponent,
    MisionComponent,
    VisionComponent
  ],
  //Permite llamar al componente del modulo sections en otro modulo 
  exports: [
    HeaderComponent,
    AnnouncementsComponent,
    CategoriesComponent,
    PodiumComponent,
    FooterComponent,
    QuienesComponent

  ],
  imports: [
    CommonModule
  ]
})
export class SectionsModule { }
