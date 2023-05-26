import { NgModule } from '@angular/core';

import { NgFor } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { WorkCardModule } from '../../components/work-card/work-card.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
	declarations: [HomePageComponent],
	imports: [MatRippleModule, NgFor, WorkCardModule],
	exports: [HomePageComponent]
})
export class HomePageModule {}
