import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendRequestService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:3030/api';

  sendToDb(user: User): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  getFromDb(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
