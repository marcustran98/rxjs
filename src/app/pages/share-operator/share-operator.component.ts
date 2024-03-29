import { Component, OnInit } from '@angular/core';
import {
  ConnectableObservable,
  interval,
  Subject,
} from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-share-operator',
  templateUrl: './share-operator.component.html',
  styleUrls: ['./share-operator.component.css'],
})
export class ShareOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let source$ = interval(1000).pipe(share());

    source$.subscribe((data) => {
      console.log(data);
    });

    setTimeout(() => {
      source$.subscribe((data) => {
        console.log(data);
      });
    }, 2000);
  }
}
