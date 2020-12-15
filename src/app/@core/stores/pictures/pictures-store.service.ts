import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Picture} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class PicturesStoreService {
  private readonly picturesStore$: BehaviorSubject<Picture[]> = new BehaviorSubject<Picture[]>([]);
  public readonly picturesSource$: Observable<Picture[]> = this.picturesStore$.asObservable();

  constructor() { }

  public setPictures(picturesList: Picture[]): void {
    this.picturesStore$.next([...picturesList]);
  }
}
