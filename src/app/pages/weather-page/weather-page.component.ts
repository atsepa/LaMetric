import { Subscription } from 'rxjs';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { WeatherResponse } from 'src/app/types/weather.types';

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html'
})
export class WeatherPageComponent implements OnInit, OnDestroy {
  icon: string = 'clear';
  imageBaseUrl: string = '/assets/images';
  temperature: number = 0;
  unit: string = `${String.fromCharCode(176)}`;

  private subscription: Subscription = new Subscription();

  constructor(private readonly weatherService: WeatherService) { }

  getIconURL(): string {
    // return `${this.imageBaseUrl}/${this.icon}.PNG`;
    return `${this.imageBaseUrl}/clear.PNG`;
  }

  getModuleText(): string {
    return `${this.temperature}${this.unit}`;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.handleSubscriptions();
  }

  private handleSubscriptions(): void {
    this.subscription.add(this.weatherService.getWeatherById()
      .subscribe(
        this.handleWeatherData,
        this.handleWeatherError
      )
    );
  }

  private handleWeatherData = (weatherData: WeatherResponse): void => {
    this.temperature = Math.floor(weatherData.main.temp);
    this.icon = weatherData.weather[0].main.toLowerCase();
    this.unit += this.weatherService.getUnitSymbol();
  }

  private handleWeatherError = (error: any): void => {
    console.log(`Error! ${error.error.message}`);

  }

}
