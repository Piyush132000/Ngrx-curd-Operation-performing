import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {UserInterface} from "../_iterfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userEdit = new Subject<boolean>();

  userUpdate = new BehaviorSubject<UserInterface>(null);

  constructor() { }

  editUserData(value): void {
    this.userEdit.next(value);
  }

  updateUserData(object: UserInterface): void {
    this.userUpdate.next(object);
  }


}
