import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: [
  ]
})
export class CountryTableComponent implements OnInit {

  @Input()
  public countries: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
