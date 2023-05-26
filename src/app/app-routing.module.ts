import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const ROUTES_ROOT: Routes = [
	{
		path: '',
		component: HomePageComponent
	},
	{
		path: 'work-detail',
		title: 'Work Detail',
		loadChildren: () => import('./pages/work-detail-page/work-detail-page.module').then((m) => m.WorkDetailPageModule)
	},
	{
		path: 'postulation',
		title: 'Postulation',
		loadChildren: () => import('./pages/postulation-page/postulation-page.module').then((m) => m.PostulationPageModule)
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: ''
	}
];

@NgModule({
	imports: [RouterModule.forRoot(ROUTES_ROOT)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
