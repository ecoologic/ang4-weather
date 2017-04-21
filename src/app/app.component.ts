import { Component } from '@angular/core';
import { Http }      from '@angular/http';

import { WeatherService } from './weather/weather.service';

@Component({
  selector: 'my-app',
  providers: [WeatherService],
  templateUrl: './component.html'
})

export class AppComponent  {
  constructor(private http: Http, private weatherService: WeatherService) {}

  place : String = "Robina";
  weather : String = "currently unknown";

  onClickMe() {
    console.log("onClickMe" + this.place);

    this.weatherService.get(this.place)
      .subscribe(data => this.weather = data.forecast[0].icon_phrase)
  };
}
