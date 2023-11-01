import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeAdressesComponent } from './client/adresses-livraison/liste-adresses/liste-adresses.component';
import { FormulaireAjoutComponent } from './client/adresses-livraison/formulaire-ajout/formulaire-ajout.component';
import { ListeCommandesComponent } from './client/liste-commandes/liste-commandes.component';
import { CommandeProduitsComponent } from './produits/commande-produits/commande-produits.component';
import { DetailsProduitsComponent } from './produits/details-produits/details-produits.component';
import { ListeProduitsComponent } from './produits/liste-produits/liste-produits.component';
import { ClientInformationComponent } from './client/client-information/client-information.component';
import { DetailsOrderComponent } from './client/detail-commande/detail-commandes.component';

//version sans child
// const routes: Routes = [

//   { 
//     //Recupére la liste des adresses des clients ----------- Ok
//     path: 'client/adresses-livraison/liste-adresses', component: ListeAdressesComponent 
//   },
//   { 
//     //Recupére les informations du client actuelle ------- OK
//     path: 'client/client-info', component: ClientInformationComponent 
//   },
//   { 
//     //creer un formulaire d'ajout d'adresses de livraison ------- OK
//     path: 'client/adresses-livraison/formulaire-ajout', component: FormulaireAjoutComponent 
//   },
//   { 
//     //recupére les commandes d'un client ------- OK
//     path: 'client/liste-commandes', component: ListeCommandesComponent 
//   },
//   { 
//     //recupére les détails de la commandes d'un client via son id de commande ------- OK
//     path: 'client/liste-commandes/:orderID', component: DetailsOrderComponent  
//   },
//   { 
//     //recupére la liste des produits ------- OK
//     path: 'produits/liste-produits', component: ListeProduitsComponent 
//   },
//   { 
//     //passer une commandes ----------- ! Attention
//     path: 'produits/commande-produits', component: CommandeProduitsComponent 
//   },
//   { 
//     //recupére les produit en fonction de leur id ------- OK
//     path: 'produits/liste-produits/:productID', component: DetailsProduitsComponent 
//   },
//   { 
//     //De base l'applie affiche la liste des produits
//     path: '', redirectTo: 'produits/liste-produits', pathMatch: 'full' 
//   }
// ];

const routes: Routes = [
  {
    path: 'client',
    children: [
      { 
        path: 'adresses-livraison/liste-adresses', 
        component: ListeAdressesComponent 
      },
      { 
        path: 'client-info', 
        component: ClientInformationComponent 
      },
      { 
        path: 'adresses-livraison/formulaire-ajout', 
        component: FormulaireAjoutComponent 
      },
      { 
        path: 'liste-commandes/:orderID', 
        component: DetailsOrderComponent 
      },
      { 
        path: 'liste-commandes', 
        component: ListeCommandesComponent 
      },
    ]
  },
  {
    path: 'produits',
    children: [
      { 
        path: 'liste-produits', 
        component: ListeProduitsComponent 
      },
      { 
        path: 'commande-produits', 
        component: CommandeProduitsComponent 
      },
      {
        path: 'liste-produits/:productID',
        component: DetailsProduitsComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'produits/liste-produits',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}