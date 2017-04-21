import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
  constructor(private http: Http) {}

  get(place : String) {
    let url = 'http://www-beta.localsearch.com.au/api/data/v2/forecasts?filter[suburb]=' + place;
    return this.http
        .get(url)
        .map((response)    => { return response.json().data[0].attributes },
             (error : any) => { return { forecast: [{ icon_phrase: "God knows"}] } });

  }
}
