import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicturesGridComponent } from './components/pictures-grid/pictures-grid.component';
import { GalleryComponent } from './gallery/gallery.component';
import {GalleryRoutingModule} from './gallery-routing.module';
import { DetailsPictureComponent } from './components/photo-view/details-picture.component';
import { DetailsPictureDialogComponent } from './components/details-picture-dialog/details-picture-dialog.component';
import { SharedModule } from '../@shared/shared.module';
import { NgxPanZoomModule } from 'ngx-panzoom';



@NgModule({
  declarations: [PicturesGridComponent, GalleryComponent, DetailsPictureComponent, DetailsPictureDialogComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModule,
    NgxPanZoomModule,
  ]
})
export class GalleryModule { }
