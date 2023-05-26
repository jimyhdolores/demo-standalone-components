import { NgFor, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { WorkCardModule } from '../../components/work-card/work-card.module';
import WorkDetailPageComponent from './work-detail-page.component';

const routes: Routes = [{ path: '', component: WorkDetailPageComponent }];

@NgModule({
	declarations: [WorkDetailPageComponent],
	imports: [RouterModule.forChild(routes), WorkCardModule, MatButtonModule, RouterLink, NgIf, NgFor]
})
export class WorkDetailPageModule {}
