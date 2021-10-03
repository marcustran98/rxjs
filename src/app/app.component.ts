import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjs';

  promiseData$ = new Promise((rs, rj) => {
    console.log("here");
    setInterval(() => {
      rs("resolve promise");
    }, 100)
  })

  obsData$ = new Observable((subscriber) => {
    subscriber.next("ok next 1");
    let count = 0;
    setInterval(() => {
      count++;
      if (count % 6 === 0) {
        subscriber.next(count);
      }
    }, 1000)
  }).pipe(
    map(res => res)
  )

  ngOnInit(): void {
    this.promiseData$.then((res) => {
      console.log("promiseData", res);
    })
    this.obsData$.forEach((res) => {
      console.log("observable Data", res);
    })
  }
}
