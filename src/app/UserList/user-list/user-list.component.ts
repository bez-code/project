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
  users = [
    {
      id: '1',
      name: 'Jack',
      age: 21
    },
    {
      id: '2',
      name: 'John',
      age: 33
    },{
      id: '3',
      name: 'Sam',
      age: 28
    },
  ]
  removeUser(id: string): void {
    this.users = this.users.filter(user => user.id !== id)
    console.log(id);

  }
  setNewUserName(userName: string): void {
    this.newUserName = userName;

  }
  addUser() {
    const uniqueId = Math.random().toString(16)
    const newUser = {
      id: uniqueId,
      name: this.newUserName,
      age: 30
    }
    this.users.push(newUser),
    this.newUserName = ''
  }
}

