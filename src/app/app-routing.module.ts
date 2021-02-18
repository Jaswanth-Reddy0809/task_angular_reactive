import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditComponent } from './edit/edit.component';
import {ProductsComponent} from './products/products.component'
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:"products",
    component:ProductsComponent
  },
  {
    path:"create",
    component:CreateComponent
  },
  {
    path:"edit/:id",
    component:EditComponent
  },
  {
    path:'users',
    component:UsersComponent  },
    {
      path:'usercreate',
      component:CreateUserComponent
    },
    {
      path:"useredit/:id",
      component:EditUserComponent
    },
    {
      path:"dashboard",
      component:DashboardComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
