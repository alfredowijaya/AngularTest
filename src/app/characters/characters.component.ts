import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  characters: any;

  ngOnInit(): void {
    this.http.get('https://swapi.dev/api/people').subscribe((Response: any) => {
      if (Response) {
        this.characters = Response.results;
        console.log('characters', this.characters);
      }
    });
  }

  public seeMore(character: any) {
    this.router.navigate(['character-details'], {
      state: { character },
    });
  }
}
