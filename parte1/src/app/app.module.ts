import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

// Angula Material
import { MatTableModule, MatPaginatorModule,
  MatSortModule, MatIconModule,
  MatDatepickerModule, MatNativeDateModule,
  MatInputModule, MatToolbarModule,
  MatProgressBarModule, MatButtonModule
} from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ClientsComponent } from './components/clients/clients.component';
import { DetailClientComponent } from './components/detail-client/detail-client.component';

// Routes
import { ROUTES } from './app.routes';
import { DataTableComponent } from './components/shared/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    NavbarComponent,
    LoadingComponent,
    DetailClientComponent,
    DataTableComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }