import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {HomeComponent} from './_ui/home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {UserEditComponent} from './_ui/home/user-edit/user-edit.component';
import {UserListComponent} from './_ui/home/user-list/user-list.component';
import {UserAddComponent} from './_ui/home/user-add/user-add.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserReducer} from "./_store/reducers/user.reducer";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserEditComponent,
    UserListComponent,
    UserAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({'app': UserReducer}),
    ReactiveFormsModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
