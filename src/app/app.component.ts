import { Component } from '@angular/core';
import {AuthService} from './@core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agile-engine-image-gallery';

  constructor(private readonly authService: AuthService) {
    this.authService.refreshToken().subscribe();
  }
}
