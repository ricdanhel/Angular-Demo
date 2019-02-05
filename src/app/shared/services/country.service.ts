import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable()
export class CountryService {


  private url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  searchCountry(countryName) : Observable<Country[]> {
    console.log("call naar: " + this.url + `/country/${countryName}`);
    return this.http.get<Country[]>(this.url + `/country/${countryName}`);
  }

  getCountries() : Observable<Country[]> {
      return this.http.get<Country[]>(this.url + "/countries/all");
  }
}
