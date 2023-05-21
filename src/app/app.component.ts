import { Component } from '@angular/core';
import { ContainerComponent } from './components/container/container.component';

@Component({
	standalone: true,
	selector: 'app-root',
	template: '<app-container></app-container>',
	imports: [ContainerComponent]
})
export class AppComponent {}
