import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const ROUTES_ROOT: Routes = [
	{
		path: '',
		component: HomePageComponent
	},
	{
		path: 'work-detail',
		title: 'Work Detail',
		loadComponent: () => import('./pages/work-detail-page/work-detail-page.component')
	},
	{
		path: 'postulation',
		title: 'Postulation',
		loadComponent: () => import('./pages/postulation-page/postulation-page.component')
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: ''
	}
];
