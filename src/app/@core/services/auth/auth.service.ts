import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {tap} from 'rxjs/operators';
import {RefreshTokenResponse} from '../../models/refresh-token-response';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN: string = 'JWT_TOKEN';

  constructor(private http: HttpClient) { }

  public get authToken(): string | null {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  public refreshToken(): Observable<RefreshTokenResponse> {
    return this.http.post<RefreshTokenResponse>(`${environment.apiUrl}/auth`, {apiKey: environment.apiKey}).pipe(
      tap((data: RefreshTokenResponse) => {
       this.storeToken(data?.token);
      })
    );
  }

  private storeToken(token: string): void {
    localStorage.setItem(this.JWT_TOKEN, token);
  }

  private removeToken() {
    localStorage.removeItem(this.JWT_TOKEN);
  }
}
