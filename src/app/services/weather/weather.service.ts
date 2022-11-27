import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, first } from 'rxjs/operators';
import { WeatherResponse } from 'src/app/types/weather.types';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const WEATHER_API_KEY: string = '7dd505c0c4b5a8d55926f61f241a1f75';
const BASE_URL: string = 'https://api.openweathermap.org/data/2.5/weather';
const ID: string = '5189022'; // get it from json
const UNIT: string = 'metric'; // standard, metric, imperial

@Injectable({
	providedIn: 'root'
})
export class WeatherService {

	constructor(private readonly http: HttpClient) { }

	getUnitSymbol(): string {
		switch (UNIT) {
			case 'metric':
				return 'c';
			case 'imperial':
				return 'f';
			default:
				return 'k';
		}
	}

	getWeatherById(): Observable<WeatherResponse> {
		return this.http.get<string>(`${BASE_URL}?id=${ID}&units=${UNIT}&appid=${WEATHER_API_KEY}`)
			.pipe(
				first(),
				catchError<any, any>(err => {
					return throwError(err);
				})
			);
	}
}
