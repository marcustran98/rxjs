import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable } from 'rxjs';
import { buffer, tap } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-operator',
  templateUrl: './buffer-operator.component.html',
  styleUrls: ['./buffer-operator.component.css'],
})
export class BufferOperatorComponent implements OnInit, AfterViewInit {
  intervalData: number[] = [];
  showData$!: Observable<Event>;
  @ViewChild("showButton") showButton!: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.showData$ = fromEvent(this.showButton.nativeElement, 'click');
  }

  startInterval() {
    interval(1000)
      .pipe(
        tap((data) => console.log(data)),
        buffer(this.showData$)
      )
      .subscribe((data: number[]) => {
        console.log("data buffer", data);
        this.intervalData.push(...data);
      });
  }
}
