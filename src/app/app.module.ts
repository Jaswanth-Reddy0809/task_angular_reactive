import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopComponent } from './top/top.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CardComponent } from './card/card.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UsercardComponent } from './usercard/usercard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopComponent,
    ProductsComponent,
    UsersComponent,
    CardComponent,
    CreateComponent,
    EditComponent,
    CreateUserComponent,
    EditUserComponent,
    UsercardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
