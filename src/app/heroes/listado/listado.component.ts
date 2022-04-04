import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  // el constructor se ejecuta antes q el onInit
  constructor() { }

  ngOnInit(): void {
  }

  heroes: string[] = ["goku", "vegetta", "trunks"];
  heroeBorrado : string = "";


  borrarHeroe():void {
    this.heroeBorrado = this.heroes.shift() || "";
    console.log(this.heroeBorrado);
  }

  listaDeHeroesVacia() : boolean {
    return this.heroes.length == 0;
  }

}
