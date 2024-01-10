import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [UserListComponent, NewUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule  
  ], 
  entryComponents: [
    NewUserComponent
  ]
})
export class UserModule { }
