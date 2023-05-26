import { NgModule } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
import { ContainerComponent } from './container.component';

@NgModule({
	declarations: [ContainerComponent],
	imports: [RouterOutlet, RouterLink],
	exports: [ContainerComponent]
})
export class ContainerModule {}
