import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormBuilderComponent } from "./form-builder/form-builder.component";
import { TestObservableComponent } from './test-observable/test-observable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveComponent, FormBuilderComponent,  TestObservableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive_pro';
}
