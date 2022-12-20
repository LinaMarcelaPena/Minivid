import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//commponents
import { ConfirmationListComponent } from './confirmation-list/confirmation-list.component';
import { TotalValueComponent } from './total-value/total-value.component';



@NgModule({
  declarations: [
    ConfirmationListComponent,
    TotalValueComponent
  ],
  exports: [
    ConfirmationListComponent,
    TotalValueComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SectionsShoppingModule { }
