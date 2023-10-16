import { Component } from '@angular/core';
import {UserInterface} from './types/user.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users : UserInterface [] = [
    {
      id: '1',
      name: 'Jack',
      age: 21,
    },
    {
      id: '2',
      name: 'John',
      age: 33
    }, {
      id: '3',
      name: 'Sam',
      age: 28
    },
  ]
  removeUser(id: string): void {
    this.users = this.users.filter(user => user.id !== id)
    console.log(id);

  }
  addUser(name: string) {
    const uniqueId = Math.random().toString(16)
    const newUser = {
      id: uniqueId,
      name,
      age: 30
    }
    this.users.push(newUser)
  }
}
