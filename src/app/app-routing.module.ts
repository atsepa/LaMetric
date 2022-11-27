import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClockPageComponent } from './pages/clock-page/clock-page.component';
import { DvdPageComponent } from './pages/dvd-page/dvd-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { YoutubeCommentSelectorPageComponent } from './pages/youtube-comment-selector-page/youtube-comment-selector-page.component';
import { YoutubePageComponent } from './pages/youtube-page/youtube-page.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: HomePageComponent
	},
	{
		path: 'clock',
		pathMatch: 'full',
		component: ClockPageComponent
	},
	{
		path: 'weather',
		pathMatch: 'full',
		component: WeatherPageComponent
	},
	{
		path: 'youtube',
		pathMatch: 'full',
		component: YoutubePageComponent
	},
	{
		path: 'youtube-comments',
		pathMatch: 'full',
		component: YoutubeCommentSelectorPageComponent
	},
	{
		path: 'dvd',
		pathMatch: 'full',
		component: DvdPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
