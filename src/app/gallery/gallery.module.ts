import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicturesGridComponent } from './components/pictures-grid/pictures-grid.component';
import { GalleryComponent } from './gallery/gallery.component';
import {GalleryRoutingModule} from './gallery-routing.module';



@NgModule({
  declarations: [PicturesGridComponent, GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
  ]
})
export class GalleryModule { }
