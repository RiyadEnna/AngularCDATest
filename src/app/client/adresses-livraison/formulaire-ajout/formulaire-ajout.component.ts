import { Component, OnInit } from '@angular/core';

import { AddressService } from 'src/app/service/address.service';
import { CountryService } from 'src/app/service/country.service';
import { Address} from '../../../service/address.service';
import { Country} from '../../../service/country.service';



@Component({
  selector: 'app-formulaire-ajout',
  templateUrl: './formulaire-ajout.component.html',
  styleUrls: ['./formulaire-ajout.component.css']
})
export class FormulaireAjoutComponent implements OnInit {
  addressToAdd: Address = {
    addressID: '',
    streetLine1: '',
    zipCode: '',
    city: '',
    phone: '',
    countryID: 0, 
    clientID: 'a0a4bf9e-b3ee-4423-907c-641b18d7af73'
  };

  countries: Country[] = [];

  constructor(
    private addressService: AddressService,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    // Récupérer la liste de tous les pays
    this.countryService.getAllCountry().subscribe((countries) => {
      this.countries = countries;
    });
  }

  addUserAddress() {
    this.addressService.createAddress(this.addressToAdd).subscribe((newAddress) => {
      console.log('Adresse ajoutée avec succès : ', newAddress);
    });
  }
}
