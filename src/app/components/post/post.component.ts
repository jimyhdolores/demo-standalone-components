import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IPost } from 'src/app/models/components-model.interface';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
	selector: 'app-post',
	standalone: true,
	imports: [AvatarComponent, MatButtonModule, MatIconModule],
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent {
	@Input({ required: true }) post!: IPost;
}
