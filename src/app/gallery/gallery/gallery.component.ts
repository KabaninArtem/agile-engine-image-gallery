import { Component, OnInit } from '@angular/core';
import {PictureService} from '../../@core/services/picture/picture.service';
import {PicturesResponse} from '../../@core/models';
import {PicturesStoreService} from '../../@core/stores';

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
