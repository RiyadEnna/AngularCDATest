import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError,of,tap } from "rxjs";
import { Client } from "../service/models/client.model";

@Injectable({
    providedIn:'root'
})

export class ClientService {
    private url = 'https://macmickey.azurewebsites.net/Client';

    constructor(private http: HttpClient) { }

    // Récupérer les informations de l'utilisateur
    getDataClient(): Observable<Client | undefined> {
        return this.http.get<Client>(this.url).pipe(
            tap((response)=>this.log(response)),
                catchError((error) => this.handleError(error,undefined))
        );
    }

    private log (response:Client|undefined){
        console.table(response);
    }

    private handleError(error:Error,errorValue:any){
        console.error(error);
        return of(errorValue)
    }
}