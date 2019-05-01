import { Component, OnInit } from '@angular/core';
import { StarwarsService } from './starwars.service';
import { Observable } from 'rxjs';
import { Person } from './models/person.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css'],
  providers: []
})
export class StarwarsComponent implements OnInit {
  private people: Person[] = [];
  private people$: Observable<any>;

  constructor(private starwarsService: StarwarsService) {
    this.people$ = this.starwarsService.getPeople();
    this.starwarsService.getPeople().subscribe((results: any) => this.people = results.results);
  }

  getPeople(){
    return this.people;
  }

  ngOnInit() {
  }

}
