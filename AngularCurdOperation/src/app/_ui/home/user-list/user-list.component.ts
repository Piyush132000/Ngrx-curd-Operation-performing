import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {UserInterface} from "../../../_iterfaces/user.interface";

import * as CurdAction from '../../../_store/actions/curd.action'
import {UserServiceService} from "../../../_services/user-service.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userData: UserInterface[];

  constructor(private store: Store<any>, private userService: UserServiceService) {
  }

  ngOnInit(): void {
    this.store.dispatch(new CurdAction.Read())
    this.store.select('app').subscribe(state => {
      this.userData = state.user
    })
  }

  editData(object: UserInterface): void {
    this.userService.editUserData(true);
    this.userService.updateUserData(object)

  }

  deleteData(id: string): void {
    this.store.dispatch(new CurdAction.Delete(id))
  }


}
