import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  constructor(private http: HttpClient) {}

  movies: any;
  regularDistribution = 25;
  ngOnInit(): void {
    this.http.get('https://swapi.dev/api/films').subscribe((Response: any) => {
      if (Response) {
        this.movies = Response.results;
        console.log('MOVIES', this.movies);
      }
    });
  }
}
