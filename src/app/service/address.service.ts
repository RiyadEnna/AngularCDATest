import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError,of,tap } from "rxjs";
import { Address } from "../service/models/addresse.model";


@Injectable({
    providedIn:'root'
})
export class AddressService{
    private url='https://macmickey.azurewebsites.net/Address';

    constructor(private http:HttpClient){}
    getAddresses(): Observable<Address[]> {
        return this.http.get<Address[]>(this.url).pipe(
            tap((response)=>this.log(response)),
                catchError((error) => this.handleError(error,[]))
        );
    }



    getAddressById(addressID: string): Observable<Address | undefined> {
        const addressUrl = `${this.url}/${addressID}`;
        return this.http.get<Address>(addressUrl).pipe(
            tap((response)=>this.log(response)),
                catchError((error) => this.handleError(error,undefined))
        );
    }

    createAddress(newAddress: Address): Observable<Address | undefined> {
        return this.http.post<Address>(this.url, newAddress).pipe(
            tap((response)=>this.log(response)),
                catchError((error) => this.handleError(error,undefined))
        );
    }

    private log (response:Address|Address[]|undefined){
        console.table(response);
    }

    private handleError(error:Error,errorValue:any){
        console.error(error);
        return of(errorValue)
    }
}


export { Address };

