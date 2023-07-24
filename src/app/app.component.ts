import { Component } from '@angular/core';
import { filter, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  users: {id: string, name: string, isActive: boolean}[]= [
    { id: '1', name: 'John', isActive: true },
    { id: '2', name: 'Jack', isActive: true },
    { id: '2', name: 'Mike', isActive: false },
  ];

  users$ = of(this.users);

  // map
  username$ = this.users$.pipe(map((users) => users.map((user) => user.name)))

  // filter
  filteredUsers$ = this.users$.pipe(
    filter((users) => users.every((user) => user.isActive)),
    map((users) => users.map((user) => user.name))
  )

}
