import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from 'src/app/data/constants/carousel.const';
import { ICarouselItem } from '../../sections/announcements/Icarousel-item.metadata';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
 
  public carouselData: ICarouselItem[]= CAROUSEL_DATA_ITEMS;

  constructor () {

  }

  ngOnInit() {
    
  }
}
