import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {PictureDetailsResponse} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class SelectedPictureDetailsStoreService {
  private readonly detailsStore$: BehaviorSubject<PictureDetailsResponse> = new BehaviorSubject<PictureDetailsResponse>({});
  public readonly detailsSource$: Observable<PictureDetailsResponse> = this.detailsStore$.asObservable();

  constructor() { }

  public setDetails(details: PictureDetailsResponse): void {
    this.detailsStore$.next({...details});
  }
}
