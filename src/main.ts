import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ROUTES_ROOT } from './app/app.routes';

bootstrapApplication(AppComponent, {
	providers: [provideAnimations(), provideRouter(ROUTES_ROOT, withComponentInputBinding())]
});
