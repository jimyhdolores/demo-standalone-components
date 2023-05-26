import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IWork } from 'src/app/models/components-model.interface';

@Component({
	selector: 'app-work-detail-page',
	templateUrl: './work-detail-page.component.html',
	styleUrls: ['./work-detail-page.component.scss']
})
export default class WorkDetailPageComponent {
	private _router = inject(Router);
	work?: IWork;

	constructor() {
		const workState = this._router.getCurrentNavigation()?.extras?.state?.['work'];
		if (workState) {
			this.work = workState as IWork;
		}
	}
}
