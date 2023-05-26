import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
	private _formBuilder = inject(FormBuilder);

	experiencieForm = this._formBuilder.nonNullable.group({
		experiencie: ['', [Validators.required, Validators.minLength(20)]],
		formation: ['', [Validators.required, Validators.minLength(20)]]
	});

	get experiencieField() {
		return this.experiencieForm.controls.experiencie;
	}

	get formationField() {
		return this.experiencieForm.controls.formation;
	}
}
