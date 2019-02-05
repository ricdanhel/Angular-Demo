import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';

import { CountryService } from './shared/services/country.service';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule    
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
