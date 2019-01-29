import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public countrySub: Subscription;
  public country$: Observable<Object[]>

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.getCountry());
  }

  getCountry() : Observable<Object[]> {
    return this.http.get<Object[]>("localhost:8080/country/netherlands");
  }

}
