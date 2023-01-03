import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';
import { MisionComponent } from './sections/mision/mision.component';
import { QuienesComponent } from './sections/quienes/quienes.component';
import { VisionComponent } from './sections/vision/vision.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(p => p.PagesModule)
  },
  {
    path: 'home',  component: LandingComponent
  },
  {
    path: 'quienes',  component: QuienesComponent
  },
  {
    path: 'mision',  component: MisionComponent
  },
  {
    path: 'vision',  component: VisionComponent
  },
  {
    path: 'productDetail',  component: ProductsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
