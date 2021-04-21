import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {UserServiceService} from "../../_services/user-service.service";
import {State} from "../../_store/reducers/user.reducer";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  editData: boolean;

  constructor(private store: Store<State>, private userService: UserServiceService) {
    this.userService.userEdit.subscribe(res => this.editData = res);
  }

  ngOnInit(): void {

  }


}
