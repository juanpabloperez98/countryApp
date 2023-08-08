import { Component, OnInit } from '@angular/core';
import { ServiceNameService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];

  constructor(private servicenameservice: ServiceNameService) { }

  ngOnInit(): void {
  }

  searchCountry( term: string ): void {
    this.servicenameservice.searchCountry(term)
      .subscribe( (countries) => {
        this.countries = countries;
      });
  }

}
