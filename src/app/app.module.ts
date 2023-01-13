import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



//components
import { AppComponent } from './app.component';

//modules
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { SectionsModule } from './sections/sections.module';
import { SectionsShoppingModule } from './sections-shopping/sections-shopping.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SectionsModule,
    SectionsShoppingModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SectionsModule,
    SectionsShoppingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
