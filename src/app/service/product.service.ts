import { Injectable } from "@angular/core";
import { Product } from "../service/models/product.model";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError,of,tap } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class ProductService{
    private url='https://macmickey.azurewebsites.net/Product';

    constructor(private http:HttpClient){}

         //recuperer toute les produits
         getAllProduct():Observable<Product[]>{
            return this.http.get<Product[]>(this.url).pipe(
                tap((response)=>this.log(response)),
                catchError((error) => this.handleError(error,[]))
        );
    }
    
        //recuperer le produit via sont id
        getProductById(prodId : string):Observable<Product |undefined> {
            const prodUrlWithId = `${this.url}/${prodId}`;
            return this.http.get<Product>(prodUrlWithId).pipe(
                tap((response)=>this.log(response)),
                catchError((error) => this.handleError(error,undefined))
        );
    }
    
        //recuperer les produits par type
        getProductByType(type : string):Observable<Product[]> {
            const productUrlByType = `${this.url}/type/${type}`;
            return this.http.get<Product[]>(productUrlByType).pipe(
                tap((response)=>this.log(response)),
                catchError((error) => this.handleError(error,[]))
        );
    }

        private log (response:Product|Product[]|undefined){
            console.table(response);
        }
    
        private handleError(error:Error,errorValue:any){
            console.error(error);
            return of(errorValue)
        }

}