import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, first } from 'rxjs/operators';
import { YoutubeResponse } from 'src/app/types/youtube.types';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL: string = 'https://youtube.googleapis.com/youtube/v3/channels?part=statistics';
const BASE_VIDEO_URL: string = 'https://www.googleapis.com/youtube/v3/search?part=snippet,id&order=date&maxResults=5'
const BASE_COMMENTS_URL: string = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=200`;
const CHANNEL_ID: string = 'UCFyfFetRagZtj-mt3S_GM-w';
const API_KEY: string = 'AIzaSyDD5ipNrqISk9W4Vb2NaapuWlcLdiZv874';

@Injectable({
	providedIn: 'root'
})
export class YoutubeService {

	constructor(private readonly http: HttpClient) { }

	getSubscribers(): Observable<YoutubeResponse> {
		return this.http.get<string>(`${BASE_URL}&id=${CHANNEL_ID}&key=${API_KEY}`)
			.pipe(
				first(),
				catchError<any, any>(err => {
					return throwError(err);
				})
			);
	}

	getComments(videId: string): Observable<YoutubeResponse> {
		return this.http.get<string>(`${BASE_COMMENTS_URL}&videoId=${videId}&key=${API_KEY}`)
			.pipe(
				first(),
				catchError<any, any>(err => {
					return throwError(err);
				})
			);
	}

	getVideosList(): Observable<YoutubeResponse> {
		return this.http.get<string>(`${BASE_VIDEO_URL}&channelId=${CHANNEL_ID}&key=${API_KEY}`)
			.pipe(
				first(),
				catchError<any, any>(err => {
					return throwError(err);
				})
			);
	}
}
