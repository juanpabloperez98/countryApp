import { Component, OnInit } from '@angular/core';
import { ServiceNameService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];

  constructor(private servicenameservice: ServiceNameService) { }

  ngOnInit(): void {
  }

  searchByCapital( term: string ): void {
    this.servicenameservice.searchCapital(term)
      .subscribe( (countries) => {
        this.countries = countries;
      });
  }

}
