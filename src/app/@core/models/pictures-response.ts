import {Picture} from './picture';

export interface PicturesResponse {
  hasMore: boolean;
  page: number;
  pageCount: number;
  pictures: Picture[];
}
