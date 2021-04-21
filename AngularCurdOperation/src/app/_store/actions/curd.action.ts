import {Action} from "@ngrx/store";
import {UserInterface} from "../../_iterfaces/user.interface";

export const READ = '[USERDATA] READ';
export const UPDATE = '[USERDATA] UPDATE';
export const DELETE = '[USERDATA] DELETE';
export const CREATE = '[USERDATA] CREATE';


export class Read implements Action {
  readonly  type = READ;
  constructor() {
  }
}

export class Create implements Action {
  readonly type = CREATE;
  constructor(public payload: { data: UserInterface}) {
  }
}


export class Delete implements Action {
  readonly type = DELETE;
  constructor(public payload: string) {
  }
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(public payload:{data: UserInterface}) {
  }
}


export type CurdAction = Create | Delete | Read | Update ;
