import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class ServiceNameService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { }

searchCountryByAlphaCode( code: string ): Observable<Country | null> {
  return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
    .pipe(
      map( countries => countries.length > 0 ? countries[0]: null ),
      catchError( error => of(null) )
    );
}

searchCapital( term: string ): Observable<Country[]> {
  return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${term}`)
    .pipe(
      catchError( error => of([]) )
    );
}


searchCountry( term: string ): Observable<Country[]> {
  return this.httpClient.get<Country[]>(`${this.apiUrl}/name/${term}`)
    .pipe(
      catchError( error => of([]) )
    );
}

searchRegion( term: string ): Observable<Country[]> {
  return this.httpClient.get<Country[]>(`${this.apiUrl}/region/${term}`)
    .pipe(
      catchError( error => of([]) )
    );
}





}
