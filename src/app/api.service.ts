import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { MOCK_ACCOUNTS, MOCK_MOVEMENTS, MOCK_USER } from './mock-response.const';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://my-domain-banking';

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user`)
      .pipe(catchError(() => of(MOCK_USER)));
  }

  getAccountBalances(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/accounts`)
      .pipe(catchError(() => of(MOCK_ACCOUNTS)));
  }

  getAccountMovements(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/accounts/movements`)
      .pipe(catchError(() => of(MOCK_MOVEMENTS)));
  }
}