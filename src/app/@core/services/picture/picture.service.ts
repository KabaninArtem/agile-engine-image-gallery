import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {PictureDetailsResponse, PicturesResponse} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private readonly http: HttpClient) { }

  public getImages$(): Observable<PicturesResponse> {
    return this.http.get<PicturesResponse>(`${environment.apiUrl}/images`);
  }

  public getImage$(id: string): Observable<PictureDetailsResponse> {
    return this.http.get<PictureDetailsResponse>(`${environment.apiUrl}/images/${id}`);
  }
}
