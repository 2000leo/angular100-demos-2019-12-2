import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { PersonDetailComponent } from "./person/person-detail.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PeopleListComponent } from "./people-list.component";
// import { ProductsModule } from "./products/products.module";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { TemplateDrivenFormComponent } from "./forms/template-driven-form.component";
import { ReactiveFormComponent } from "./forms/reactive-form.component";

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { TemplateSignupComponent } from './forms/template-signup.component';
import { ReactiveLoginFormComponent } from './forms/reactive-login-form.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    PersonDetailComponent,
    NavbarComponent,
    PeopleListComponent,
    ProductListComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    TemplateSignupComponent,
    ReactiveLoginFormComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
