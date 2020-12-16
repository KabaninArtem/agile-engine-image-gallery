import { Component, OnInit } from '@angular/core';
import {SelectedPictureDetailsStoreService} from '../../../@core/stores/selected-picture-details/selected-picture-details-store.service';
import {PictureDetailsResponse} from '../../../@core/models';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-details-picture',
  templateUrl: './details-picture.component.html',
  styleUrls: ['./details-picture.component.css']
})
export class DetailsPictureComponent implements OnInit {
  public details$!: Observable<PictureDetailsResponse>;
  constructor(private readonly detailsPictureStore: SelectedPictureDetailsStoreService) { }

  ngOnInit(): void {
    this.details$ = this.detailsPictureStore.detailsSource$;
  }

  public sharePicture(): void {
    // Needs future implementation
  }
}
