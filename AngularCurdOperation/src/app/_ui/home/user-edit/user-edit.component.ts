import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import * as CurdAction from "../../../_store/actions/curd.action";
import {UserServiceService} from "../../../_services/user-service.service";
import {UserInterface} from "../../../_iterfaces/user.interface";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  formData: FormGroup;
  user: UserInterface;

  constructor(private store: Store<any> , private form: FormBuilder , private userService: UserServiceService) { }

  ngOnInit(): void {

    this.userService.userUpdate.subscribe(data => {
       this.user = data;
      })
    this.formData = this.form.group({
      'Name':[this.user.name,Validators.required],
      'Email':[this.user.email,[Validators.email, Validators.required]],
      'Mobile':[this.user.mobileNo,Validators.required]
    })
  }

  updateData(): void{
    this.store.dispatch(new CurdAction.Read());
    console.log(this.formData);
    const Name = this.formData.controls.Name.value;
    const Email = this.formData.controls.Email.value;
    const Mobile = this.formData.controls.Mobile.value;

    this.store.dispatch(new CurdAction.Update({ data: { id: this.user.id , name: Name ,email: Email, mobileNo: Mobile}}));
    this.userService.editUserData(false);

  }

}
