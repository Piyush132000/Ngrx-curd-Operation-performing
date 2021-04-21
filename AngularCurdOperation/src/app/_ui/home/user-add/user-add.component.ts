import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import * as CurdAction from '../../../_store/actions/curd.action';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  formData: FormGroup;
  constructor(private store: Store<any> , private form: FormBuilder) { }

  ngOnInit(): void {
    this.formData = this.form.group({
      'Name':['',Validators.required],
      'Email':['',[Validators.email, Validators.required]],
      'Mobile':['',Validators.required]

    })
  }

  SubmitData(): void {
    if (this.formData.valid) {
      this.store.dispatch(new CurdAction.Read());
      let length;
      this.store.select('app').subscribe(state => {
        const l = state.user.length
        length = +state.user[l - 1].id
      })
      console.log(this.formData);
      const Name = this.formData.controls.Name.value;
      const Email = this.formData.controls.Email.value;
      const Mobile = this.formData.controls.Mobile.value;
      this.store.dispatch(new CurdAction.Create({data: {id: length + 1, name: Name, email: Email, mobileNo: Mobile}}))
      this.formData.reset();
    }

  }


}
