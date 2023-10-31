// import { Component, OnInit } from '@angular/core';
// import { Address } from 'src/app/service/models/addresse.model';
// import {AddressService} from '../../../service/address.service'

// @Component({
//   selector: 'app-liste-adresses',
//   templateUrl:`./liste-adresses.component.html`,
//   styleUrls: ['./liste-adresses.component.css']
// })
// export class ListeAdressesComponent implements OnInit  {
//   //c'est un peu redondant mais je préfére rajouter des sécuriter
//   adresseList:Address[]|undefined;

//   constructor( private addressService: AddressService){}

//   ngOnInit(): void {
//       this.addressService.getAddresses()
//       .subscribe(adresseList=>this.adresseList = adresseList);
//   }



// }

import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/service/models/addresse.model';
import { AddressService } from '../../../service/address.service';
import { CountryService } from '../../../service/country.service'; // Importez le service CountryService

@Component({
  selector: 'app-liste-adresses',
  templateUrl: `./liste-adresses.component.html`,
  styleUrls: ['./liste-adresses.component.css']
})
export class ListeAdressesComponent implements OnInit {
  adresseList: Address[] | undefined;

  countryNames: Map<number, string> = new Map<number, string>();

  constructor(
    private addressService: AddressService,
    private countryService: CountryService 
  ) {}

  ngOnInit(): void {
    this.addressService.getAddresses().subscribe((adresseList) => {
      this.adresseList = adresseList;
      this.populateCountryNames(); 
    });
  }

  private populateCountryNames(): void {
    if (this.adresseList) {
      this.adresseList.forEach((address) => {
        this.countryService.getCountryWithCode(address.countryID.toString()).subscribe((country) => {
          if (country) {
            this.countryNames.set(address.countryID, country.name);
          }
        });
      });
    }
  }
}
