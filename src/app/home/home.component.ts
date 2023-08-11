import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  products: any[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // This subscribes to the observable and provides a callback function. 
    // When data is received from the API, this callback function is executed.
    this.apiService.get().subscribe((data: any) => {
      console.log(data);

      // data: any indicates that the received data has the type any, which means TypeScript will allow any type of data.
      // Inside the callback, the received data is logged to the console using console.log(data), 
      // and then the products property is assigned the received data.
      this.products = data;
    });
  }
}

// This code 
// - fetches data from the API using the ApiService, 
// - subscribes to the observable returned by the API call, 
// - logs the received data, 
// - and assigns the data to the products array property of the component.

/*
We imported and injected  ApiService.  
Next, we defined a products variable and called the get() method of the service for fetching data from the JSON REST API server.
*/