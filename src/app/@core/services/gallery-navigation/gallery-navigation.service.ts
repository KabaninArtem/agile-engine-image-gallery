import { Injectable } from '@angular/core';
import {PicturesStoreService} from '../../stores';
import {Picture} from '../../models';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryNavigationService {
  private readonly NOT_FOUND_IMAGE_ERROR = 'Image not found in gallery';

  constructor(private readonly picturesStore: PicturesStoreService) { }

  public getNextPictureId(currentPictureId: string): string | null {
    const index = this.getPictureIndex(currentPictureId);
    if (index === -1) {
      throwError(this.NOT_FOUND_IMAGE_ERROR);
      // Not best realization of catching this case, do not judge strictly =)
      return null;
    }
    return this.findNextPictureId(index);
  }

  public getPrevPictureId(currentPictureId: string): string | null {
    const index = this.getPictureIndex(currentPictureId);
    if (index === -1) {
      throwError(this.NOT_FOUND_IMAGE_ERROR);
      // Not best realization of catching this case, do not judge strictly =)
      return null;
    }
    return this.findPrevPictureId(index);
  }

  private findNextPictureId(index: number): string {
    const pictures = this.picturesStore.pictureSourceValue;
    const lastElementIndex = this.picturesStore.picturesLength - 1;
    const isLastElement = index === lastElementIndex;
    return isLastElement ? this.picturesStore.firstPicture.id : pictures[index + 1].id;
  }

  private findPrevPictureId(index: number): string {
    const pictures = this.picturesStore.pictureSourceValue;
    const isFirstElement = index === 0;
    return isFirstElement ? this.picturesStore.lastPicture.id : pictures[index - 1].id;
  }

  private getPictureIndex(id: string): number {
    const pictures = this.picturesStore.pictureSourceValue;
    return pictures.findIndex((picture: Picture) => picture.id === id);
  }
}
