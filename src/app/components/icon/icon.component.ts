import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-icon',
	template: `<img [src]="src" (click)="goToNextModule()" (dblclick)="goToHome()"/>`,
	styleUrls: ['./icon.component.scss']
})
export class IconComponent {
	isSingleClick: boolean = true;

	@Input() nextModule: string;
	@Input() src: string;

	constructor(private readonly router: Router) { }

	goToHome(): void {
		this.isSingleClick = false;
		this.router.navigate(['']);
	}

	goToNextModule(): void {
		this.isSingleClick = true;
		setTimeout(() => {
			if (this.isSingleClick) {
				this.router.navigate([this.nextModule]);
			}
		}, 250)
	}
}
