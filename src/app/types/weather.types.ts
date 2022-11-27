export interface WeatherResponse {
	base: string;
	clouds: Cloud;
	cod: number;
	coord: Coordinate;
	dt: number;
	id: number;
	main: MainWeather;
	name: string;
	sys: System;
	timezone: number;
	visibility: number;
	weather: Weather[];
	wind: Wind;

}

export enum MainWeatherEnum {
	CLEAR = 'Clear',
	EXTREME = 'Extreme',
	RAIN = 'Rain',
	SNOW = 'Snow',
	CLOUDS = 'Clouds'
}

interface System {
	country: string;
	id: number;
	message: number;
	sunrise: number;
	sunset: number;
	type: number;
}

interface Cloud {
	all: number;
}

interface Wind {
	deg: number;
	speed: number;
}

interface Coordinate {
	lat: number;
	lon: number;
}

interface Weather {
	description: string;
	icon: string;
	id: number;
	main: MainWeatherEnum;
}

interface MainWeather {
	feels_like: number;
	humidity: number;
	pressure: number;
	temp: number;
	temp_max: number;
	temp_min: number;
}
