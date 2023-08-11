import { Injectable } from '@angular/core';

// adding error handling
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  // defining the SERVER_URL variable that contains the address of our REST API server.
  private SERVER_URL = "http://localhost:3000/products";

  // imported and injected the HttpClient service 
  constructor(private HttpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown Error!'; // Default error message

    if (error.error instanceof ErrorEvent) {
      // client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    window.alert(errorMessage); // Display the error message in an alert window
    return throwError(errorMessage);  // Throw the error as an observable
  }

  // Method for sending GET request WITH error handling
  public sendGetRequest(){
    return this.HttpClient.get(this.SERVER_URL).pipe(
      catchError(this.handleError)); // Apply error handling using catchError
  }

  // Method for sending GET request WITHOUT error handling
  // defining get() method that sends a GET request to the REST API endpoint
  public get() {
    return this.HttpClient.get(this.SERVER_URL); // send GET request to the REST API
  }
  
}
