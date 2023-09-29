import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  newUserName: string = ''
  testUser = ' This is test user';
  testGroup = ['Jack', 'John', 'Sam']
  Users = [
    {
      id: 1,
      name: 'Jack',
      age: 21
    },
    {
      id: 2,
      name: 'John',
      age: 33
    },{
      id: 1,
      name: 'Sam',
      age: 28
    },
  ]
  setNewUserName(username: string): void {
    this.newUserName = username;
    console.log(username);

  }
  addUser() {
    const uniqueId = Math.random().toString(16)
    const newUser = {
      id: uniqueId,
      name: this.newUserName,
      age: 30
    }
    this.Users.push(newUser)
  }
}
}
