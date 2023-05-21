import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { RouterLink } from '@angular/router';
import { WorkCardComponent } from 'src/app/components/work-card/work-card.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { ExperienceComponent } from './experience/experience.component';
import { PostulationConfirmationComponent } from './postulation-confirmation/postulation-confirmation.component';

@NgModule({
	declarations: [ExperienceComponent, BasicInformationComponent, PostulationConfirmationComponent],
	imports: [
		MatStepperModule,
		MatButtonModule,
		WorkCardComponent,
		NgIf,
		RouterLink,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		ReactiveFormsModule
	],
	exports: [
		ExperienceComponent,
		BasicInformationComponent,
		PostulationConfirmationComponent,
		MatStepperModule,
		MatButtonModule,
		NgIf,
		RouterLink
	]
})
export class PostulationPageModule {}
