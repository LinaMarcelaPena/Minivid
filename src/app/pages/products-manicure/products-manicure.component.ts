import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTSM_DATA_ITEMS } from 'src/app/data/constants/productsM.const';

import { CartService } from '../../services/cart.service';
import { IProductsM } from './IproductsM-item.metadata';
import { ConfirmationListComponent } from '../../sections-shopping/confirmation-list/confirmation-list.component';

@Component({
  selector: 'app-products-manicure',
  templateUrl: './products-manicure.component.html',
  styleUrls: ['./products-manicure.component.scss'],
})
export class ProductsManicureComponent  implements OnInit{

  public nameProduct = document.getElementById('#nameProduct');


  constructor () {
   
  }
  
  ngOnInit() {

  }
}
