import { Component } from '@angular/core';
import { ApiPurchasesService } from 'src/app/services/api-purchases.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent {

  loading:boolean;
  error:boolean;
  client:any = [];
  clientId:string;

  // Columns of table client
  displayedColumns: string[] = ['nombre', 'monto', 'compro', 'tdc', 'date'];

  constructor(
    private _apiPurchases:ApiPurchasesService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    // Get param id from url
    this.clientId = this._route.snapshot.paramMap.get('id');
    // When starting the app, carry out a request to the service
    this.getClientById(this.clientId);
  }

  getClientById(clientId:string) {
    this.loading = true;
    this._apiPurchases.getClientById(clientId).subscribe( (data:any) => {
      // Save the data got from the request
      this.client = new MatTableDataSource(data);
      this.loading = false;
    }, ( error ) => {
      console.error(error);
      this.loading = false;
      this.error = true;
    });
  }

  // Redirect to the route clients
  goBack() {
    this._router.navigate(['/clients']);
  }

}