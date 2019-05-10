import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Person } from "./models/person.model";

@Injectable({
  providedIn: "root"
})
export class PeopleService {
  url = "http://localhost:5556/people";

  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }

  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.url}/${id}`);
  }
}
