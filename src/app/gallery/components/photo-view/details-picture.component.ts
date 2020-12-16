import { Component, OnInit } from '@angular/core';
import {SelectedPictureDetailsStoreService} from '../../../@core/stores/selected-picture-details/selected-picture-details-store.service';
import {PictureDetailsResponse} from '../../../@core/models';
import {Observable} from 'rxjs';
import { PanZoomConfig, PanZoomAPI } from 'ngx-panzoom';
import {skip, tap} from 'rxjs/operators';

@Component({
  selector: 'app-details-picture',
  templateUrl: './details-picture.component.html',
  styleUrls: ['./details-picture.component.css']
})
export class DetailsPictureComponent implements OnInit {
  public details$!: Observable<PictureDetailsResponse>;
  public panZoomConfig: PanZoomConfig = new PanZoomConfig({keepInBounds: true, keepInBoundsDragPullback: 10000});
  public panZoomAPI!: PanZoomAPI;

  constructor(private readonly detailsPictureStore: SelectedPictureDetailsStoreService) { }

  ngOnInit(): void {
    // Need skip first because of first PanZoomAPI initialization.
    // As a Behaviours Subject it initialize with default null values
    this.panZoomConfig.api.pipe(skip(1)).subscribe( (api: PanZoomAPI) => {
      this.panZoomAPI = api;
    });
    this.details$ = this.detailsPictureStore.detailsSource$.pipe(tap(() => {
      this.panZoomAPI?.resetView();
    }));
  }
}
