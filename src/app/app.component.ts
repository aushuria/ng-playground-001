import { Component } from '@angular/core';
import { concatAll, concatMap, delay, exhaustMap, from, map, mergeMap, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //basic Map
  foo$ = from([1, 2, 3, 4, 5]).pipe(map((item) => item * 10));

  constructor() {
    // basic Map
    // this.foo$.subscribe(item => console.log(item));

    const example = (operator: any) => () => {
      from([0, 1, 2, 3, 4])
        .pipe(operator((x: any) => of(x).pipe(delay(500))))
        .subscribe(
          console.log,
          () => {},
          () => console.log(`${operator.name} completed`)
          )
    }

    // mergeMap
    // example(mergeMap)();

    // concatMap : wait prev variable completed
    // example(concatMap)();

    //switchMap: cancel any prev observable
    // example(switchMap)();

    //exhaustedMap: cancel next observable, until first observable compelete
    example(exhaustMap)();
  }
}
