import { NgModule } from '@angular/core';
import { FormulaireAjoutComponent } from './adresses-livraison/formulaire-ajout/formulaire-ajout.component';
import { ListeAdressesComponent } from './adresses-livraison/liste-adresses/liste-adresses.component';
import { ClientInformationComponent } from './client-information/client-information.component';
import { ListeCommandesComponent } from './liste-commandes/liste-commandes.component';
import { DetailsOrderComponent } from './detail-commande/detail-commandes.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        FormulaireAjoutComponent,
        ListeAdressesComponent,
        ClientInformationComponent,
        ListeCommandesComponent,
        DetailsOrderComponent
    ],
    imports: [
      CommonModule,
      FormsModule
    ],
    exports:[
        FormulaireAjoutComponent
    ]
  })
  export class ClientModule { }
  