import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiPurchasesService {

  constructor(private http:HttpClient) { }

  getQuery(query:string) {
    const url = `https://apirecruit-gjvkhl2c6a-uc.a.run.app/${query}`;
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });

    return this.http.get(url , {headers});
  }

  getClients(date:string) {
    return this.getQuery(`compras/${date}`)
    .pipe( map( data => data ));
  }

  getClientById(id:string) {
    return this.getQuery(`clientes/${id}`)
    .pipe( map( data => data ));
  }
}
