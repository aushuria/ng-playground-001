import { Component, OnInit } from '@angular/core';
import { Observable, concatAll, concatMap, delay, exhaustMap, from, map, mergeMap, observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Observable Constructor
  // myObs = new Observable((observer) => {
  //   console.log('Observable starts');
  //   setTimeout(() => { observer.next('1') }, 1000)
  //   setTimeout(() => { observer.next('2') }, 2000)
  //   setTimeout(() => { observer.next('3') }, 3000)
  //   // setTimeout(() => { observer.error(new Error('Something went wrong!')) }, 3000)
  //   setTimeout(() => { observer.next('4') }, 4000)
  //   setTimeout(() => { observer.next('5') }, 5000)
  //   setTimeout(() => { observer.complete() }, 6000)
  // })

  // Observable "of" operator
  array1 = [1, 2, 3, 4, 5];
  array2 = ['A', 'B', 'C', 'D', 'E'];

  // myObs = of(this.array1, this.array2);

  myObs = from(this.array1).pipe(
    map((val) => val * 5)
  );


  ngOnInit(): void {
    this.myObs.subscribe(
      (val) => { console.log(val) },
      (error) => console.log(error.message),
      () => console.log('Complete emitting value')
      
    )
  }
}
