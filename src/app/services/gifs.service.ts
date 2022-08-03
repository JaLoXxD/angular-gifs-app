import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiUrl: string = 'https://api.giphy.com/v1/gifs/search';
  private apiKey: string = 'BwRrfatle0towJ6b77BL61moagJHRyha';

  constructor(private http: HttpClient) {
  }


  getGifs(category: string = 'dragon', quantity: number) {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', category)
      .set('limit', quantity);

    return this.http.get(`${this.apiUrl}`, { params });
  };

}
