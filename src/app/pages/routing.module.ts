import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component
import { LandingComponent } from './landing/landing.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'productsDetails',
    component: ProductsDetailsComponent
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
