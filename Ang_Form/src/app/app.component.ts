import { Component } from '@angular/core';

import { ReactiveComponent } from "./reactive/reactive.component";
@Component({
  selector: 'app-root',
  standalone : true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ ReactiveComponent]
})
export class AppComponent {
  title = 'angular-forms';
}
