import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { forecast } from '../models/forecast';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl = "https://localhost:44360"

  constructor(private http: HttpClient) { }

  getForecasts(): Observable<any[]> {
    return this.http.get<any[]>(this.ApiUrl + '/GetAll');
  }

  getForecast(id: number): Observable<any> {
    return this.http.get<any>(this.ApiUrl + '/Get/' + id);
  }
}
