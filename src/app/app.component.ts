import { Component }             from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable }            from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  templateUrl: './component.html'
})

export class AppComponent  {
  constructor(private http: Http) {}

  place : String = "Robina";
  weather : String = "currently unknown";

  onClickMe() {
    console.log("getData");

    this.http
        .get('http://www-beta.localsearch.com.au/api/data/v2/forecasts?filter[suburb]=' + this.place)
        .subscribe((response) => { this.weather = response.json().data[0].attributes.forecast[0].icon_phrase },
                   (error) => { this.weather = "Who knows" });
  };
}
