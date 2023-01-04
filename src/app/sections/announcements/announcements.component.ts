import { Component, Input, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from 'src/app/data/constants/carousel.const';
import { ICarouselItem } from './Icarousel-item.metadata';


@Component({
  selector: 'announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {

  

  /**
   * custom properties - son propiedades que vienen directamente desde el padre
   * que utiliza el componente 
   */
  // el input se utiliza para definir propiedades que vienen desde una vista o un padre - altura del carousel
  @Input() height = 249;
  // por si pasa el 100% de la pantalla
  @Input() isFullScreen = false;
  //los items van a utilizar las propiedades que creamos en la interfaz que por el momento va a ser un array vacio
  @Input() items: ICarouselItem[] = [];

  /**
   * Calculo de propiedades finales 
   * se deja public para que pueda ser usada fuera del componente, si se dejara private esta 
   * solo podria ser usada por el componente donde fue creada
   */

  //inicializacion
  public finalHeight: string | number = 0;
  public currentPosition = 0;


  constructor() {
    //se asigna el valor que va a tener 
    //indicamos que si la altura final va a utiliza el 100% de la pantalla que tenga medida 
    // de 100 de alto y ancho si no es asi que utlice la altura que se envia por medio de la vista padre
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;

  }

  ngOnInit() {
    //mapear los items para asignarle los valores de forma correcta 
    this.items.map((i, index) => {
      i.id = index;
      //todas las imagenes estaran una seguida de otra 
      i.marginLeft = 0;
    });
  }

  //metodo para la posicion que recibira un parametro que se llamara posicion de tipo number
  setCurrentPosition(position: number) {
    //indicamos la posicion actual
    this.currentPosition = position;
    // aqui se realiza la operacion para que nos cambie la posicion de cada imagen 
    //inicia con la posicion 0 al realizar la operacion  1 * -100px 
    //quedanra en la posicion 1
    this.items.find((i) => i.id === 0)!.marginLeft = -100 * position;
  }

  //muestra la posicion que contunia 
  setNext() {
    let finalPercentage = 0;
    //estoy indicando que me guarde en nexPosition el resultado de mi posicion actual que se 
    //encuentra en metodo setCurrentPosition y le sume 1
    let nextPosition = this.currentPosition + 1;
    //La siguiente posisicion debe ser menor o igual a la cantidad de posiciones que se tienen
    //se coloca -1 ya que la posicion inicial sera 0
    if (nextPosition <= this.items.length - 1) {
      //si se cumple la condicion indicad anteriormente la posicion actual cambiara 
      finalPercentage = -100 * nextPosition;
    } else {
      //al llegar al maximo de posiciones nos regresara a la posicion 0
      nextPosition = 0;
    }

    this.items.find((i) => i.id === 0)!.marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }

  //metodo que regresar a la posicion anterior 
  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      //nos enviara a la ultima posicion
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    this.items.find((i) => i.id === 0)!.marginLeft = finalPercentage;
    this.currentPosition = backPosition;
  
  }

}
