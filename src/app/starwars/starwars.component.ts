import { Component, OnInit } from '@angular/core';
import { StarwarsService } from './starwars.service';
import { Observable, Subscription } from 'rxjs';
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
  private people$: Subscription;

  constructor(private starwarsService: StarwarsService) {
    this.people$ = this.starwarsService.getPeople().subscribe((results: any) => this.people = results.results);
  }

  getPeople(){
    return this.people;
  }

  ngOnInit() {
  }

  OnDestroy() {
    this.people$.unsubscribe();
  }

}
