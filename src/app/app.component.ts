import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agile-engine-image-gallery';

  constructor(private readonly http: HttpClient) {
    this.http.get(`${environment.apiUrl}/images`).subscribe(images => {
      console.log('images - ', images);
    });
  }
}
