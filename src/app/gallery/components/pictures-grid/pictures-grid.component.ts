import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {PicturesStoreService} from '../../../@core/stores';
import {Picture} from '../../../@core/models';
import {MatDialog} from '@angular/material/dialog';
import {DetailsPictureDialogComponent} from '../details-picture-dialog/details-picture-dialog.component';

@Component({
  selector: 'app-pictures-grid',
  templateUrl: './pictures-grid.component.html',
  styleUrls: ['./pictures-grid.component.css']
})
export class PicturesGridComponent implements OnInit {
  public images$!: Observable<Picture[]>;
  constructor(private readonly pictureStore: PicturesStoreService, private readonly dialog: MatDialog) { }

  ngOnInit(): void {
    this.images$ = this.pictureStore.picturesSource$;
  }

  public openPhotoView(id: string): void {
    this.dialog.open(DetailsPictureDialogComponent, {
      data: { id }
    });
  }
}
