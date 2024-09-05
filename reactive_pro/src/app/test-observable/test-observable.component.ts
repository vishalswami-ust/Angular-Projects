import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  standalone: true,
  imports: [], // Add any required modules here
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'] // Corrected property
})
export class TestObservableComponent {
  
  invoke() {
    const observable: Observable<string> = this.createObservable();
    this.subscribeToObservable(observable);
  }
 
  createObservable(): Observable<string> {
    return new Observable<string>((obs) => {
      setTimeout(() => {
        obs.next("Hello");
      }, 1000);

      setTimeout(() => {
        obs.next("Welcome");
      }, 2000);

      setTimeout(() => {
        obs.next("Asynchronous");
      }, 3000);

      setTimeout(() => {
        obs.next("Communication");
        obs.complete(); // Complete the observable after the last emission
      }, 4000);
    });
  }
 
  subscribeToObservable(observable: Observable<string>) {
    observable.subscribe({
      next: (data) => {
        console.log('from subscriber', data);
      },
      error: (err) => {
        console.error('Error:', err);
      },
      complete: () => {
        console.log('Observable completed');
      }
    });
  }
}
