import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { WORK_DUMMY } from 'src/app/models/work-dummy';
import { IWork } from './../../models/components-model.interface';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
	private _router = inject(Router);
	readonly works = WORK_DUMMY;

	clickWorkCard(work: IWork): void {
		this._router.navigate(['/work-detail'], { state: { work } });
	}
}
