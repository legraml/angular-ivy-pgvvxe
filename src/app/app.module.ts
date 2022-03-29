import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeCreateComponent } from  './employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule ],
  exports:      [],
  declarations: [ AppComponent, HelloComponent, EmployeeEditComponent, EmployeeListComponent, EmployeeCreateComponent ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
