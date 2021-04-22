import * as fromCurdAction from "../actions/curd.action";
import {UserData} from "../../_mockData/UserData";
import {UserInterface} from "../../_iterfaces/user.interface";

export interface State {
  user: UserInterface[]

}

const initialState = {
  user: UserData,
}

export function UserReducer(state = initialState, action: fromCurdAction.CurdAction): State{

  switch (action.type) {
    case fromCurdAction.READ: {
      console.log( state);
      return {...state };
    }

    case fromCurdAction.CREATE: {
      const updateList = state.user.concat(action.payload.data)
      return {...state, user: updateList};
    }

    case fromCurdAction.DELETE: {
      console.log(state);
      const userList = [...state.user].filter(user => user.id != action.payload);
      return {...state, user: userList}
    }

    case fromCurdAction.UPDATE: {

      let userUpdatedList = state.user.slice();
      for ( var i in userUpdatedList)
      {
        if (userUpdatedList[i].id === action.payload.data.id )
        {
          userUpdatedList[i] = action.payload.data;
        }
      }
      return {...state , user: userUpdatedList };
    }

    default: {
      return {...state};
    }

  }

}


