import {Component} from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>
        
        <h3> la base es : <strong>{{base}}</strong></h3>
        
        <button (click)="acumular2(1)" >+  {{base}}</button>
        
        <span>{{numero}}</span>
        
        <button (click)="acumular2(-1)">- {{base}} </button>
        `,
})
export class ContadorComponent{

    public title: string = 'contador app';
    public numero: number = 10;
    public base : number = 5;
  
    sumar(){
      this.numero ++;
    }
  
    restar (){
      this.numero --;
    }
  
    acumular (valor : number): void{
      this.numero += valor;
    }
  
    acumular2 (valor : number): void{
      this.numero += (this.base * valor);
    }

}