import { Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { DetailClientComponent } from './components/detail-client/detail-client.component';

export const ROUTES:Routes = [
	{
		path: 'clients',
		component: ClientsComponent
	},

	{
		path: 'clients/client/:id',
		component: DetailClientComponent
	},

	{
		path: '**',
		pathMatch: 'full',
		redirectTo: 'clients'
	}

];