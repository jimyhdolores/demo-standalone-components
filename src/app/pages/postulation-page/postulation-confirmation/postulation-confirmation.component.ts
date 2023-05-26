import { Component } from '@angular/core';

@Component({
	selector: 'app-postulation-confirmation',
	template: `
		<div class="pc-container">
			<img class="pc-container__image" src="assets/img/confirmation-postulation.png" />
			<h3>Se ha enviado tu postulación, estás a un paso de conseguir tu trabajo ideal.😎</h3>
		</div>
	`,
	styleUrls: ['./postulation-confirmation.component.scss']
})
export class PostulationConfirmationComponent {}
