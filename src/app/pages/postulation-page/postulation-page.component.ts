import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IWordCardComponent } from 'src/app/models/components-model.interface';

@Component({
	selector: 'app-postulation-page',

	templateUrl: './postulation-page.component.html',
	styleUrls: ['./postulation-page.component.scss']
})
export default class PostulationPageComponent {
	private _router = inject(Router);
	confirmation = false;
	wordCard!: IWordCardComponent;

	constructor() {
		const workState = this._router.getCurrentNavigation()?.extras?.state?.['wordCard'];
		if (workState) {
			this.wordCard = workState as IWordCardComponent;
		}
	}
}
