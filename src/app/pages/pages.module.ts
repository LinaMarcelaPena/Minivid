import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routing Module 
import { RoutingModule } from './routing.module';
// modules 
import { SectionsModule } from '../sections/sections.module';

//Pages
import { LandingComponent } from './landing/landing.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SectionsProductsModule } from '../sections-products/sections-products.module';
import { SectionsShoppingModule } from '../sections-shopping/sections-shopping.module';




@NgModule({
  declarations: [
    LandingComponent,
    ProductsDetailsComponent,
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SectionsModule,
    SectionsProductsModule,
    SectionsShoppingModule
  ]
})
export class PagesModule { }
