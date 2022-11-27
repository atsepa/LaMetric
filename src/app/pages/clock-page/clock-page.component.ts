import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
	selector: 'app-clock-page',
	templateUrl: './clock-page.component.html'
})
export class ClockPageComponent {
	// implements OnInit, OnDestroy {

	// time: Date;
	// intervalID: any;

	$time: Observable<Date> = timer(0, 1000).pipe(map(() => new Date()));


	// constructor() { }

	// ngOnInit(): void {
	//   this.handleGetTime();
	// }

	// ngOnDestroy() {
	//   clearInterval(this.intervalID);
	// }

	// private handleGetTime(): void {
	//   this.intervalID = setInterval(() => {
	//     this.time = new Date();
	//   }, 1000);
	// }

}
