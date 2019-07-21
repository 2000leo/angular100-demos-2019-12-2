import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonComponent } from './person/person.component';
import { ProductListComponent } from './products/product-list.component';
import { TemperatureConverterPipe } from './temperature-converter.pipe';

@NgModule({
  declarations: [AppComponent, PeopleListComponent, PersonComponent, ProductListComponent, TemperatureConverterPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
