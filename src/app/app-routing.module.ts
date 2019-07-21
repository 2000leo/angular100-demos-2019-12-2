import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "products", //Angular 8 Notation with Promise
    loadChildren: () => import('./products/products.module')
                        .then(mod => {
                          console.log('in promise loadChildren');
                          return mod.ProductsModule;
                        }),
  },
  //Before Angular 8
  { path: "observables", loadChildren: './observables/observables.module#ObservablesModule' },

//  { path: "observables", component: ObservablesExampleComponent },



  { path: "users", component: UserListComponent },
  { path: "**", redirectTo: "/users" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// { path: "users/:id", component: PersonDetailComponent },
