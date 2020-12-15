import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {catchError} from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  // private isRefreshing = false;
  // private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      request = this._addToken(request, environment.token);

      return next.handle(request).pipe(
        catchError((error) => {
          return throwError(error);
        })
    );
  }

  private _addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  // private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
  //   if (!this.isRefreshing) {
  //     this.isRefreshing = true;
  //     this._refreshTokenSubject.next(null);
  //
  //     return this.authService.refreshToken().pipe(
  //       switchMap((tokenResource) => {
  //         this.isRefreshing = false;
  //         this.refreshTokenSubject.next(tokenResource.accessToken);
  //         return next.handle(this._addToken(request, tokenResource.accessToken));
  //       })
  //     );
  //   } else {
  //     return this.refreshTokenSubject.pipe(
  //       filter<string>(Boolean),
  //       take(1),
  //       switchMap((jwt) => {
  //         return next.handle(this._addToken(request, jwt));
  //       })
  //     );
  //   }
  // }
}
