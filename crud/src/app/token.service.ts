import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private apiUrl = 'http://localhost:9999/authenticate'; 
  private greetUrl = 'http://localhost:9999/greet';

  private token: string | null = null;

  constructor(private http: HttpClient) {}

  // Method to authenticate user
  authenticate(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password });
  }

  setToken(token: string) {
    this.token = token;
  }

  // Get token
  getToken(): string | null {
    return this.token;
  }

  // Method to call the greet API with the JWT token
  greet(): Observable<string> {
    if (!this.token) {
      throw new Error('No token found');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get<string>(this.greetUrl, { headers , responseType: 'text' as 'json'});
  }

}
