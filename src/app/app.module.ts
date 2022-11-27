import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './components/icon/icon.component';
import { ModuleTextComponent } from './components/module-text/module-text.component';
import { YoutubeCommentComponent } from './components/youtube-comment/youtube-comment.component';
import { ClockPageComponent } from './pages/clock-page/clock-page.component';
import { DvdPageComponent } from './pages/dvd-page/dvd-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { YoutubeCommentSelectorPageComponent } from './pages/youtube-comment-selector-page/youtube-comment-selector-page.component';
import { YoutubePageComponent } from './pages/youtube-page/youtube-page.component';

@NgModule({
	declarations: [
		AppComponent,
		ClockPageComponent,
		HomePageComponent,
		WeatherPageComponent,
		IconComponent,
		ModuleTextComponent,
		YoutubePageComponent,
		DvdPageComponent,
		YoutubeCommentSelectorPageComponent,
		YoutubeCommentComponent
	],
	imports: [
		FormsModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
