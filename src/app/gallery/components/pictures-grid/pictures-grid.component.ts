import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {PicturesStoreService} from '../../../@core/stores/pictures-store.service';
import {Picture} from '../../../@core/models/picture';

@Component({
  selector: 'app-pictures-grid',
  templateUrl: './pictures-grid.component.html',
  styleUrls: ['./pictures-grid.component.css']
})
export class PicturesGridComponent implements OnInit {
  public images$!: Observable<Picture[]>;
  constructor(private readonly pictureStore: PicturesStoreService) { }

  ngOnInit(): void {
    this.images$ = this.pictureStore.picturesSource$;
  }
}
