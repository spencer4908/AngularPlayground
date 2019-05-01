import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  baseURI: string;

  constructor(private httpClient: HttpClient) {
    this.baseURI = 'https://swapi.co/api/';
   }

  getPeople(page?: number) {
    if (page != null){
      return this.httpClient.get(this.baseURI + 'people/' + page);
    }
    return this.httpClient.get(this.baseURI + 'people');
  }
}
