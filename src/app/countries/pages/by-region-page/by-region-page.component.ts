import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { ServiceNameService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];

  constructor(private servicenameservice: ServiceNameService) { }

  ngOnInit(): void {
  }

  searchRegion( term: string ): void {
    this.servicenameservice.searchRegion(term)
      .subscribe( (countries) => {
        this.countries = countries;
      });
  }

}
