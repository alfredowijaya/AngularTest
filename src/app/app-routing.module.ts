import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharactersComponent } from './characters/characters.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    data: { title: 'Movies' },
    component: MovieComponent,
  },
  {
    path: 'characters',
    data: { title: 'Characters' },
    component: CharactersComponent,
  },
  {
    path: 'character-details',
    data: { title: 'Character Details' },
    component: CharacterDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
