import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({

    //componentes del módulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],

    //componentes de este módulo que quiero hacer visibles o públicos para fuera de este módulo
    exports:[
        ListadoComponent
    ],

    //modulos que quiero importar, NO AGREGAR ACÁ COMPONENTES
    imports:[
        CommonModule
    ]
})
export class HeroesModule{

}