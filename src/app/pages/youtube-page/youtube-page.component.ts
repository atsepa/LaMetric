import { Subscription, interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { YoutubeService } from 'src/app/services/youtube/youtube.service';
import { YoutubeResponse } from 'src/app/types/youtube.types';

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
	selector: 'app-youtube-page',
	templateUrl: './youtube-page.component.html',
	styleUrls: ['./youtube-page.component.scss']
})
export class YoutubePageComponent implements OnInit, OnDestroy {

	subscribers: string;
	private subscription: Subscription = new Subscription();

	constructor(private readonly youtubeService: YoutubeService) { }

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	ngOnInit(): void {
		this.handleSubscriptions();
	}

	private handleInterval = (): void => {
		this.subscription.add(this.youtubeService.getSubscribers()
			.subscribe(
				this.handleYoutubeData,
				this.handleYoutubeError
			)
		);
	};

	private handleSubscriptions(): void {
		this.subscription.add(interval(10 * 60 * 1000).subscribe(this.handleInterval));
		this.subscription.add(this.youtubeService.getSubscribers()
			.subscribe(
				this.handleYoutubeData,
				this.handleYoutubeError
			)
		);

	}

	private handleYoutubeData = (youtubeData: YoutubeResponse): void => {
		console.log('youtubeData', youtubeData)
		this.subscribers = youtubeData.items[0].statistics.subscriberCount;
	};

	private handleYoutubeError = (error: any): void => {
		console.log(`Error! ${error.error.message}`);
	};

}
