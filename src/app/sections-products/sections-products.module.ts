import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { ActionsComponent } from './actions/actions.component';
import { DescriptionComponent } from './description/description.component';



@NgModule({
  declarations: [
    ActionsComponent,
    DescriptionComponent
  ],
  exports: [
    ActionsComponent,
    DescriptionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SectionsProductsModule { }
