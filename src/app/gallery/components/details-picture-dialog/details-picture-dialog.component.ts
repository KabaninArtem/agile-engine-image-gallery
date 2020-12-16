import {Component, Inject, OnInit} from '@angular/core';
import {PictureService} from '../../../@core/services/picture/picture.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PictureDetailsResponse} from '../../../@core/models';
import {SelectedPictureDetailsStoreService} from '../../../@core/stores/selected-picture-details/selected-picture-details-store.service';

@Component({
  selector: 'app-photo-view-dialog',
  templateUrl: './details-picture-dialog.component.html',
  styleUrls: ['./details-picture-dialog.component.css']
})
export class DetailsPictureDialogComponent implements OnInit {
  constructor(
    private readonly pictureService: PictureService,
    private readonly selectedPictureDetailsStore: SelectedPictureDetailsStoreService,
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

}
