import { Component } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  templateUrl: './component.html'
})

export class AppComponent  {
  constructor(private http: Http) {}

  location : String = "Robina";
  weather : String = "Good";
  result = {};

  // private parseResponse(response : Response) {
  //   return response;
  // }

  getData() {
    console.log("getData");

    let params: URLSearchParams = new URLSearchParams();
    params.set('filter[suburb]', 'robina');
    params.set('callback', 'JSONP_CALLBACK');

    this.http
        .get('http://www-beta.localsearch.com.au/api/data/v2/forecasts', params)
        .map(response => { this.result = response.json().data })
        .subscribe(
        (data) => {
            debugger
            console.log(this.result);
        },
        (error) => {
            debugger
            console.log(error);
        });


    // return this.jsonp
    //     .get('http://www-beta.localsearch.com.au/api/data/v2/forecasts?filter[suburb]=robina&callback=JSONP_CALLBACK')
        // .map(response => <string[]> console.log(response.json()));
        // .map(this.parseResponse);
  };

  onClickMe() {
    console.log('onClickMe');
    this.getData(); // .subscribe(data => this.data = data)
  }

}
