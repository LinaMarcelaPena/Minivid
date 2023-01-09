import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routing Module 
import { RoutingModule } from './routing.module';
// modules 
import { SectionsModule } from '../sections/sections.module';

//Pages
import { LandingComponent } from './landing/landing.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SectionsProductsModule } from '../sections-products/sections-products.module';
import { SectionsShoppingModule } from '../sections-shopping/sections-shopping.module';
import { ProductsManicureComponent } from './products-manicure/products-manicure.component';
import { ProductsMakeupComponent } from './products-makeup/products-makeup.component';
import { ProductsOrnamentsComponent } from './products-ornaments/products-ornaments.component';
import { ProductsHairComponent } from './products-hair/products-hair.component';
import { ProductsToolsComponent } from './products-tools/products-tools.component';




@NgModule({
  declarations: [
    LandingComponent,
    ProductsManicureComponent,
    ProductsMakeupComponent,
    ProductsOrnamentsComponent,
    ProductsHairComponent,
    ProductsToolsComponent,
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
