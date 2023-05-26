import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ContainerModule } from './components/container/container.module';
import { HomePageModule } from './pages/home-page/home-page.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, ContainerModule, HomePageModule],
	bootstrap: [AppComponent]
})
export class AppModule {}
