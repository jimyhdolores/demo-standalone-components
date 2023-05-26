import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { WorkCardModule } from '../../components/work-card/work-card.module';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { ExperienceComponent } from './experience/experience.component';
import { PostulationConfirmationComponent } from './postulation-confirmation/postulation-confirmation.component';
import PostulationPageComponent from './postulation-page.component';

const routes: Routes = [{ path: '', component: PostulationPageComponent }];

@NgModule({
	declarations: [
		PostulationPageComponent,
		ExperienceComponent,
		BasicInformationComponent,
		PostulationConfirmationComponent
	],
	imports: [
		RouterModule.forChild(routes),
		WorkCardModule,
		MatStepperModule,
		MatButtonModule,
		RouterLink,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule,
		NgIf,
		MatIconModule,
		MatButtonModule
	],
	exports: [PostulationConfirmationComponent]
})
export class PostulationPageModule {}
