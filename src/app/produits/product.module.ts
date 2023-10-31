import { NgModule } from '@angular/core';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { DetailsProduitsComponent } from './details-produits/details-produits.component';
import { CommandeProduitsComponent } from './commande-produits/commande-produits.component';
import { CommonModule } from '@angular/common';
import { QuantitySelectorComponent } from '../../app/quantity-selector/quantity-selector.component';


@NgModule({
    declarations: [
      CommandeProduitsComponent,
      DetailsProduitsComponent,
      ListeProduitsComponent,
      QuantitySelectorComponent
    ],
    imports: [
      CommonModule
    ],
    exports:[
        CommandeProduitsComponent
    ]
  })
  export class ProductModule { }
  