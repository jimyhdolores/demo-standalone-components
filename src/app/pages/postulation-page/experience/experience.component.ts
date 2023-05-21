import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
	selector: 'app-experience',
	standalone: true,
	imports: [MatInputModule, MatFormFieldModule, ReactiveFormsModule, NgIf],
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
