import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PeopleListComponent } from "./people-list.component";
import { PersonDetailComponent } from "./person/person-detail.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { TemplateDrivenFormComponent } from "./forms/template-driven-form.component";
import { ReactiveFormComponent } from "./forms/reactive-form.component";

const routes: Routes = [
  { path: "people", component: PeopleListComponent },
  { path: "template-form", component: TemplateDrivenFormComponent },
  { path: "reactive-form", component: ReactiveFormComponent },

  { path: "products", component: ProductListComponent },
  { path: "people/:id", component: PersonDetailComponent },
  // { path: "people/moo", component: PersonDetailComponent },
  { path: "", redirectTo: "/template-form", pathMatch: "full" },
  { path: "**", redirectTo: "/template-form" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
