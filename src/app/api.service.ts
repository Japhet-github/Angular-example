import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  // defining the SERVER_URL variable that contains the address of our REST API server.
  private SERVER_URL = "http://localhost:3000/products";

  // imported and injected the HttpClient service 
  constructor(private HttpClient: HttpClient) { }

  // defining get() method that sends a GET request to the REST API endpoint
  public get() {

    // this invokes the get() method of the HttpClient
    // to send GET request to the REST API
    return this.HttpClient.get(this.SERVER_URL);
  }
}
