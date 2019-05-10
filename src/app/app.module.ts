import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people/people-list.component';
import { PersonComponent } from './data/person.component';
import { ProductListComponent } from './products/product-list.component';
import { UserListComponent } from './users/user-list.component';
import { UserCardComponent } from './users/user-card.component';
import { ProductRowComponent } from './products/product-row.component';
import { UserTableComponent } from './users/user-table.component';
import { UserRowComponent } from './users/user-row.component';
import { NgCodeExamplesComponent } from './ng-code-examples/ng-code-examples.component';

@NgModule({
  declarations: [AppComponent, PeopleListComponent, PersonComponent, ProductListComponent, UserListComponent, UserCardComponent, ProductRowComponent, UserTableComponent, UserRowComponent, NgCodeExamplesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
