import { Component, enableProdMode } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl : 'heroe.component.html'
})
export class HeroeComponent{
    nombre : string = "ironman";
    edad : number = 45;


    obtenerNombre() : string{
        return `${this.nombre} - ${this.edad}`;
    }

    
    //sólo getter.
    get nombreCapitalizado() : string {
        return this.nombre.toUpperCase();
    }
    
    cambiarNombre() : void {
        this.nombre = "Spiderman";
    }

    cambiarEdad() : void {
        this.edad = 30;
    }

}