import {ActionReducerMap} from "@ngrx/store";
import {AppState} from "../states/App.interface";
import {UserReducer} from "./user.reducer";


export const  AppReducer: ActionReducerMap<AppState> = {
  app: UserReducer
};
