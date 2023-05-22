import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { Router } from '@angular/router';
import { WorkCardComponent } from 'src/app/components/work-card/work-card.component';
import { WORK_DUMMY } from 'src/app/models/work-dummy';
import { IWork } from './../../models/components-model.interface';

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [WorkCardComponent, MatRippleModule, NgFor],
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
	private _router = inject(Router);
	readonly works = WORK_DUMMY;

	clickWorkCard(work: IWork): void {
		this._router.navigate(['/work-detail'], { state: { work }, queryParams: { token: 'miToken' } });
	}
}
