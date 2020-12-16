import { Directive } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'img[photoView]'
})
export class PhotoViewDirective {

  constructor() { }

}
