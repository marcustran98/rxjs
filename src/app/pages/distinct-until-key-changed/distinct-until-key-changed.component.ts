import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-key-changed',
  templateUrl: './distinct-until-key-changed.component.html',
  styleUrls: ['./distinct-until-key-changed.component.css'],
})
export class DistinctUntilKeyChangedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let employees = [
      { id: 1, name: 'DKC RXJS' },
      { id: 2, name: 'DKC RXJS2' },
      { id: 2, name: 'DKC RXJS2' }, //dropped
      { id: 3, name: 'Le4ela3' },
      { id: 3, name: 'DKC RXJS3' }, //dropped
      { id: 2, name: 'DKC RXJS2' },
      { id: 4, name: 'DKC RXJS4' },
    ];

    // from(employees)
    //   .pipe(distinctUntilKeyChanged('name'))
    //   .subscribe((data) => {
    //     console.log(data);
    //   });

    from(employees)
      .pipe(
        distinctUntilKeyChanged('name', (prev, cur) => {
          return prev.substr(0, 4) === cur.substr(0, 4);
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
