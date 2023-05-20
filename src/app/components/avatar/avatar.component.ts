import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-avatar',
	standalone: true,
	imports: [NgClass, NgStyle],
	template: `
		<div
			class="avatar-container"
			[style.width.px]="width"
			[style.height.px]="height"
			[ngClass]="{ 'avatar-container--history': isStory }"
		>
			<img class="avatar" [width]="width - 5" [height]="height - 5" [src]="pathImage" [alt]="name" />
		</div>
	`,
	styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
	@Input({ required: true }) pathImage!: string;
	@Input() name?: string;
	@Input() width = 64;
	@Input() height = 64;
	@Input() isStory = false;
}
