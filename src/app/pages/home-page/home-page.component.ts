import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	elem: any;
	isFullScreen: boolean;


	constructor(
		@Inject(DOCUMENT) private document: any
	) { }

	chkScreenMode(): void {
		if (document.fullscreenElement) {
			this.isFullScreen = true;
		} else {
			this.isFullScreen = false;
		}
	}

	/* Close fullscreen */
	closeFullscreen(): void {
		if (this.document.exitFullscreen) {
			this.document.exitFullscreen();
		} else if (this.document.mozCancelFullScreen) {
			/* Firefox */
			this.document.mozCancelFullScreen();
		} else if (this.document.webkitExitFullscreen) {
			/* Chrome, Safari and Opera */
			this.document.webkitExitFullscreen();
		} else if (this.document.msExitFullscreen) {
			/* IE/Edge */
			this.document.msExitFullscreen();
		}
	}

	@HostListener('document:fullscreenchange', ['$event'])
	@HostListener('document:webkitfullscreenchange', ['$event'])
	@HostListener('document:mozfullscreenchange', ['$event'])
	@HostListener('document:MSFullscreenChange', ['$event'])
	fullscreenModes(event: any): void {
		this.chkScreenMode();
	}

	ngOnInit(): void {
		this.chkScreenMode();
		this.elem = document.documentElement;
	}

	openFullscreen(): void {
		if (this.elem.requestFullscreen) {
			this.elem.requestFullscreen();
		} else if (this.elem.mozRequestFullScreen) {
			/* Firefox */
			this.elem.mozRequestFullScreen();
		} else if (this.elem.webkitRequestFullscreen) {
			/* Chrome, Safari and Opera */
			this.elem.webkitRequestFullscreen();
		} else if (this.elem.msRequestFullscreen) {
			/* IE/Edge */
			this.elem.msRequestFullscreen();
		}
	}

}
