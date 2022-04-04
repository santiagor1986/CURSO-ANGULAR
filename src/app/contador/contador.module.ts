import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
      ContadorComponent,
    ],

    exports:[
        ContadorComponent
    ],
  
    //importo modulos de node modules como otros módulos de la aplicación
    imports: [
    ],
  
  })
export class ContadorModule { }