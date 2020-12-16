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

  public get pictureSourceValue(): Picture[] {
    return [...this.picturesStore$.getValue()];
  }

  public get picturesLength(): number {
    return this.pictureSourceValue.length;
  }

  public get firstPicture(): Picture {
    return this.pictureSourceValue[0];
  }

  public get lastPicture(): Picture {
    return this.pictureSourceValue[this.picturesLength - 1];
  }
}
