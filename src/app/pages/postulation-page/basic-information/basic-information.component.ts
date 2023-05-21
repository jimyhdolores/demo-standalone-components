import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
	selector: 'app-basic-information',
	standalone: true,
	imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf, MatIconModule, MatButtonModule],
	templateUrl: './basic-information.component.html',
	styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent {
	private _formBuilder = inject(FormBuilder);

	basicInformationForm = this._formBuilder.nonNullable.group({
		file: this._formBuilder.control<File | undefined>(undefined, Validators.required),
		salary: [0, [Validators.required, Validators.min(3000)]],
		question: ['', Validators.required]
	});

	onFileSelected(event: Event): void {
		const htmlInput: HTMLInputElement = event.target as HTMLInputElement;
		if (htmlInput && htmlInput.files && htmlInput.files.length > 0) {
			this.fileField.setValue(htmlInput.files[0]);
		}
	}

	get fileField() {
		return this.basicInformationForm.controls.file;
	}

	get salaryField() {
		return this.basicInformationForm.controls.salary;
	}

	get questionField() {
		return this.basicInformationForm.controls.question;
	}
}
