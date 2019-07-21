import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { UserListComponent } from './users/user-list.component';
import { UserCardComponent } from './users/user-card.component';
import { ProductRowComponent } from './products/product-row.component';
import { UserTableComponent } from './users/user-table.component';
import { UserRowComponent } from './users/user-row.component';
import { NgCodeExamplesComponent } from './ng-code-examples/ng-code-examples.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ObservablesExampleComponent } from './observables/observables-example.component';
import { EvensObservableComponent } from './observables/evens-observable.component';
import { OddsObservableComponent } from './observables/odds-observable.component';
import { SimpleObservableComponent } from './observables/simple-observable.component';
import { OperatorsObservableComponent } from './observables/operators-observable.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent, ProductListComponent, UserListComponent, UserCardComponent, ProductRowComponent, ObservablesExampleComponent, UserTableComponent, UserRowComponent, NgCodeExamplesComponent, NavbarComponent, EvensObservableComponent, SimpleObservableComponent, OddsObservableComponent, OperatorsObservableComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
