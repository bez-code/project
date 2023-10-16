import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInterface } from 'src/app/types/user.interface';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users: UserInterface[] = []
  @Output() removeUser = new EventEmitter<string>()
  @Output() addUserEvent = new EventEmitter<string>()

  newUserName: string = ''


  setNewUserName(userName: string): void {
    this.newUserName = userName;
  }

  addUser() {
    this.addUserEvent.emit(this.newUserName)
    this.newUserName = ''
  }

}

