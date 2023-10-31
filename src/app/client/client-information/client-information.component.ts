import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/service/models/client.model';
import {ClientService} from '../../service/client.service'
import { style } from '@angular/animations';

@Component({
  selector: 'app-liste-commandes',
  templateUrl:`./client-information.component.html`,
  styleUrls: ['./client-information.component.css']

})
export class ClientInformationComponent implements OnInit  {
  clientData:Client|undefined;

  constructor( private clientService: ClientService){}

  ngOnInit(): void {
      this.clientService.getDataClient()
      .subscribe(clientData=>this.clientData = clientData);
  }
}
