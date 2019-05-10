import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent }
  from './products/product-list.component';
import { UserListComponent } from './users/user-list.component';
import { ObservablesExampleComponent }
  from './observables/observables-example.component';
import { UserDetailComponent } from './users/user-detail.component';
import { UserLoginComponent } from './user/user-login.component';
import { UserEditComponent } from './user/user-edit.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },

  { path: "users", component: UserListComponent },
  {
    path: "users/:id", component: UserDetailComponent,
    children: [
      { path: 'logindetails', component: UserLoginComponent },
      { path: 'edit', component: UserEditComponent }
    ]
  },

  { path: "products", component: ProductListComponent },
  { path: "observables", component: ObservablesExampleComponent },
  { path: "**", redirectTo: "/users" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// { path: "users/:id", component: PersonDetailComponent },
