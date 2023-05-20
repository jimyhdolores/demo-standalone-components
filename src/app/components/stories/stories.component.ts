import { NgFor, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
	selector: 'app-stories',
	standalone: true,
	imports: [AvatarComponent, NgFor, SlicePipe],
	templateUrl: './stories.component.html',
	styleUrls: ['./stories.component.scss']
})
export class StoriesComponent {
	users = [
		{ path: 'assets/img/atman.webp', name: 'Paul Rudd' },
		{ path: 'assets/img/foto1.jpg', name: 'Robert Downey' },
		{ path: 'assets/img/foto2.jpg', name: 'Chris Evans' },
		{ path: 'assets/img/panter.webp', name: 'Chadwick Boseman' },
		{ path: 'assets/img/scarllet.jpg', name: 'Scarlett Johansson' },
		{ path: 'assets/img/thor.webp', name: 'Chris Hemsworth' },
		{ path: 'assets/img/tom.jpg', name: 'Tom Holland' }
	];
}
