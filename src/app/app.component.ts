import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, filter, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  users: {id: string, name: string, isActive: boolean}[]= [
    { id: '1', name: 'John', isActive: true },
    { id: '2', name: 'Jack', isActive: true },
    { id: '2', name: 'Mike', isActive: true },
  ];

  users$ = of(this.users);

  // map
  username$ = this.users$.pipe(map((users) => users.map((user) => user.name)))

  // filter
  filteredUsers$ = this.users$.pipe(
    filter((users) => users.every((user) => user.isActive))
  )

  // Behaviour Subject
  user$ = new BehaviorSubject<{id: number; name: string} | null>(null);


  data$ = combineLatest([
    this.users$,
    this.username$,
    this.filteredUsers$
  ]).pipe(
    map(([user, 
      username, 
      filteredUsers
    ]) => ({
      user,
      username,
      filteredUsers
    }))
  )

  ngOnInit(): void {
      // setTimeout(() => {
      //   this.user$.next({id: 1, name: 'John'})
      // }, 2000)
  }

}
