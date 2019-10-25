import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { SpecialPeopleComponent } from './special-people/special-people.component';
import { ObservablesExampleComponent } from './observables/observables-example.component';
import { EvensObservableComponent } from './observables/evens-observable.component';
import { FromObservableComponent } from './observables/from-observable.component';
import { OddsObservableComponent } from './observables/odds-observable.component';
import { OperatorsObservableComponent } from './observables/operators-observable.component';

@NgModule({
  declarations: [AppComponent, SpecialPeopleComponent, FromObservableComponent, ObservablesExampleComponent, EvensObservableComponent, OddsObservableComponent, OperatorsObservableComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
