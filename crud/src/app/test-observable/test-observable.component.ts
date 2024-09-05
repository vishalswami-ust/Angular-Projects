import { Component } from '@angular/core';
import { Observable, timeInterval } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent {
  invoke() {
    let observable: Observable<Object> = this.createObservable();
    //this.subscribeToObservable(observable);
  }

  createObservable(): Observable<Object> {
    return new Observable((obs) => {

      setTimeout(() => {
       (obs.next('Hello'));
      }, 1000);
      setTimeout(() => {
       (obs.next('welcome'));
      }, 2000);
      setTimeout(() => {
        (obs.next('Asynchronous'));
      }, 3000);
      setTimeout(() => {
        (obs.next('Communication'));
      }, 4000);



      
      // setTimeout(() => {
      //   console.log(obs.next('Hello'));
      // }, 1000);
      // setTimeout(() => {
      //   console.log(obs.next('welcome'));
      // }, 2000);
      // setTimeout(() => {
      //   console.log(obs.next('Asynchronous'));
      // }, 3000);
      // setTimeout(() => {
      //   console.log(obs.next('Communication'));
      // }, 4000);

      //  obs.next("123...");
      //  obs.next("456");
      //  obs.next("Hello");
    });
  }

  subscribeToObservable(observable: Observable<Object>) {
    observable.subscribe((data) => {
      console.log('from subscriber',data);
    });
  }
}
