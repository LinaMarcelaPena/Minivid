//exportar la interfaz 

import { RouterLink, RouterLinkActive } from "@angular/router";

//cuando se utilice el componente donde se va a emplear el carousel debe tener estas propiedades
export interface ISliderItem {
    //id es necesario
    id:number;
    //si las imagenes del carousel llevan titulo y subtitulo se agregaran las propiedades correspondientes
    href: string;
    //imagenes del carousel
    image: string;
    //orden con el ? se indica que es opcional
    order?: number;
    //espacio entre las imagenes del carousel tambien sera opcional
    marginLeft?: number;

    
} 