import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component
import { LandingComponent } from './landing/landing.component';
import { ProductsHairComponent } from './products-hair/products-hair.component';
import { ProductsMakeupComponent } from './products-makeup/products-makeup.component';
import { ProductsManicureComponent } from './products-manicure/products-manicure.component';
import { ProductsOrnamentsComponent } from './products-ornaments/products-ornaments.component';
import { ProductsToolsComponent } from './products-tools/products-tools.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'productsManicure',
    component: ProductsManicureComponent
  },
  {
    path: 'productsMakeup',
    component: ProductsMakeupComponent
  },
  {
    path: 'productsOrnaments',
    component: ProductsOrnamentsComponent
  },
  {
    path: 'productsHair',
    component: ProductsHairComponent
  },
  {
    path: 'productsTools',
    component: ProductsToolsComponent
  },
  {
    path: 'shoppingList',
    component: ShoppingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
