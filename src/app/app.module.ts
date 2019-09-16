import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ObservablesModule } from './observables/observables.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { NotfoundComponent } from './notfound.component';
import { LoginComponent } from './login/login.component';
import { LoginFormTemplateComponent } from './login/login-form-template/login-form-template.component';
import { LoginFormReactiveComponent } from './login/login-form-reactive/login-form-reactive.component';
import { CreditCardValidatorDirective } from './directives/credit-card-validator.directive';
import { RegisterFormReactiveComponent } from './login/register-form-reactive/register-form-reactive.component';
import { StoreModule } from '@ngrx/store';
//import { reducers, metaReducers } from './reducers';
import { counterReducer } from './store/reducers/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent,NotfoundComponent, LoginComponent, LoginFormTemplateComponent, LoginFormReactiveComponent,CreditCardValidatorDirective, RegisterFormReactiveComponent, MyCounterComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule, HttpClientModule, ObservablesModule, UsersModule, ProductsModule, 
  StoreModule.forRoot({ count: counterReducer })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

