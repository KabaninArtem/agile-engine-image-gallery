import {Component, Inject, OnInit} from '@angular/core';
import {PictureService} from '../../../@core/services';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PictureDetailsResponse} from '../../../@core/models';
import {SelectedPictureDetailsStoreService} from '../../../@core/stores';
import {GalleryNavigationService} from '../../../@core/services';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-photo-view-dialog',
  templateUrl: './details-picture-dialog.component.html',
  styleUrls: ['./details-picture-dialog.component.css']
})
export class DetailsPictureDialogComponent implements OnInit {
  constructor(
    private readonly pictureService: PictureService,
    private readonly selectedPictureDetailsStore: SelectedPictureDetailsStoreService,
    private readonly galleryNavigationService: GalleryNavigationService,
    public dialogRef: MatDialogRef<DetailsPictureDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: string}
    ) { }

  ngOnInit(): void {
    this.pictureService.getImage$(this.data.id).subscribe((details: PictureDetailsResponse) => {
      this.selectedPictureDetailsStore.setDetails(details);
    });
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public prevPicture(): void {
    const id = this.selectedPictureId ? this.galleryNavigationService.getPrevPictureId(this.selectedPictureId) : null;
    if (id) {
      this.setPrevNextDetails(id);
    }
  }

  public nextPicture(): void {
    const id = this.selectedPictureId ? this.galleryNavigationService.getNextPictureId(this.selectedPictureId) : null;
    if (id) {
      this.setPrevNextDetails(id);
    }
  }

  private get selectedPictureId(): string | undefined  {
    return this.selectedPictureDetailsStore.selectedPictureId;
  }

  private setPrevNextDetails(id: string): void {
    this.pictureService.getImage$(id).pipe(take(1)).subscribe((details: PictureDetailsResponse) => {
      this.selectedPictureDetailsStore.setDetails(details);
    });
  }
}
