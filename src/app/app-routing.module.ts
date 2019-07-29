import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { NotfoundComponent } from './notfound.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { LoginFormTemplateComponent } from './login/login-form-template/login-form-template.component';
import { LoginFormReactiveComponent } from './login/login-form-reactive/login-form-reactive.component';
import { RegisterFormReactiveComponent } from './login/register-form-reactive/register-form-reactive.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "products", //Angular 8 Notation with Promise
    canActivate: [AuthGuard],
    loadChildren: () => import('./products/products.module')
                        .then(mod => {
                          console.log('in promise loadChildren');
                          return mod.ProductsModule;
                        }),
  },
  //Before Angular 8
  { path: "observables", loadChildren: './observables/observables.module#ObservablesModule' },

  { path: "login",
    component: LoginComponent,
    children: [
      { path: 'loginTemplate', component: LoginFormTemplateComponent },
      { path: 'loginReactive', component: LoginFormReactiveComponent },
      { path: 'registerReactive', component: RegisterFormReactiveComponent },


    ],
  },

  { path: "users",
    component: UserListComponent,
    canActivate: [AuthGuard],

  },

    {
    path: "users/:id", component: UserDetailComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'logindetails', component: UserLoginComponent },
      { path: 'edit', component: UserEditComponent }
    ],

  },
  { path: "**", component: NotfoundComponent }  //Not found page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// { path: "users/:id", component: PersonDetailComponent },
