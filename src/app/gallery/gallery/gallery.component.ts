import { Component, OnInit } from '@angular/core';
import {PictureService} from '../../@core/services/picture/picture.service';
import {Observable} from 'rxjs';
import {PicturesResponse} from '../../@core/models/pictures-response';
import {PicturesStoreService} from '../../@core/stores/pictures-store.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  constructor(private readonly pictureService: PictureService, private readonly picturesStore: PicturesStoreService) { }

  ngOnInit(): void {
    this.pictureService.getImages$().subscribe((images: PicturesResponse) => {
      this.picturesStore.setPictures(images.pictures);
    });
  }

}
