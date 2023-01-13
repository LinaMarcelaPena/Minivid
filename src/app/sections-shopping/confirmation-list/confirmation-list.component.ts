import { Component } from '@angular/core';

@Component({
  selector: 'confirmation-list',
  templateUrl: './confirmation-list.component.html',
  styleUrls: ['./confirmation-list.component.scss']
})
export class ConfirmationListComponent {


  constructor (){

    const nameProduct = document.querySelector('#nameProduct')
    console.log(nameProduct);
  }


}
