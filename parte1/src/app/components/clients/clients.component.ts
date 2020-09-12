import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ApiPurchasesService } from 'src/app/services/api-purchases.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent {

  loading:boolean = false;
  error:boolean = false;
  clients:any = [];

  // Pagination config
  pageOffset: number = 0;
  pageIndex:number = 0;
  totalClients:string;
  pageSize:number = 15;
  
  // Minimum Date
  minDate:Date = new Date(2019, 10, 1);

  // Maximum Date
  maxDate:Date = new Date(2020, 2, 31);

  // Default Date
  dateByDefault:FormControl = new FormControl(this.minDate);

  // Columns of table clients
  displayedColumns: string[] = ['nombre', 'monto', 'compro', 'tdc', 'date', 'view'];

  constructor(
    private _apiPurchases:ApiPurchasesService,
    private _router: Router
  ) {
    // When starting the app, carry out a request to the service
    this.getAllClients(this.minDate.toLocaleDateString('sv-SE'));
  }

  // Logical to detect pagination but wasn't possible because API doesn't offer data about the pagination
  pageEvent(pageEvent:any){
    pageEvent.pageIndex === 0 ? this.pageOffset = 0 : '';
    pageEvent.pageIndex === 1 ? this.pageOffset = pageEvent.pageIndex + pageEvent.pageSize - 1 : '';
    if ( pageEvent.pageIndex > 1 ) {
      this.pageIndex > pageEvent.pageIndex ? this.pageOffset = this.pageOffset - pageEvent.pageSize : this.pageOffset = this.pageOffset + pageEvent.pageSize;
    }
    this.pageIndex = pageEvent.pageIndex;
  }

  // Make a request to service to get data about clients
  getAllClients(date:string) {
    this.loading = true;
    this.pageIndex = 0;
    this.pageOffset = 0;
    
    this._apiPurchases.getClients(date).subscribe( (data:any) => {
      // Save the data got from the request
      this.clients = new MatTableDataSource(data);
      this.totalClients = data.length;
      this.loading = false;
    }, ( error ) => {
      console.error(error);
      this.loading = false;
      this.error = true;
    });
  }

  // Function to detect changes in the datepicker
  changeDate(event) {
    let formatDate = new Date(event.value).toLocaleDateString('sv-SE');
    this.getAllClients(formatDate);
  }

  // Redirect to the route of the client by specific clientId
  goToDetailClient(clientId:string) {
    this._router.navigate(['/clients/client', clientId]);
  }
}