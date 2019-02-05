import { Component, OnInit } from '@angular/core';
import { CountryService } from '../shared/services/country.service';
import { Observable, Subscription } from 'rxjs';
import { Country } from '../shared/models/country';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public country$: Observable<Country>;
  public countrySub: Subscription;

  public countries$: Observable<Country[]>;

  private countryName: string;
  private countryCapital: string;
  private countryFlag: string;

  private searchedCountry: Country;

  private searchDone: boolean;

  private naam: string;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  // Optie 1
  searchCountry(keyword: string) {
    this.country$ = this.countryService.searchCountry(keyword).pipe(map(result => result[0]));
    this.countrySub = this.country$.subscribe(res => { this.countryName = res.name, this.countryCapital = res.capital, this.countryFlag = res.flag });
    this.searchDone = true;
  }

  // Optie 2
  // searchCountry(keyword: string) {
  //   this.country$ = this.countryService.searchCountry(keyword);
  //   this.countrySub = this.country$.subscribe((result) => { this.searchedCountry = result });
  //   this.searchDone = true;
  // }

  //Optie 3
  // searchCountry(keyword: string) {
  //   this.countryService.searchCountry(keyword).subscribe((foundCountry) => { this.searchedCountry = foundCountry });
  //   this.searchDone = true;
  // }

  getCountries() {
    this.countries$ = this.countryService.getCountries();
  }

}
