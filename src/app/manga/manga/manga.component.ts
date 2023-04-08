import { Component, OnInit } from '@angular/core';
import { map, Observable, pipe, switchMap, tap } from 'rxjs';
import { Movie, ResultsEntity } from 'src/app/core/models/movie.model';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.scss']
})
export class MangaComponent implements OnInit {

  constructor(private movieservice:MovieService){

  }
  
  title!:string;
  urlPoster!:string;
  description!:string;
  synopsis!:string;
  movies$!:Observable<Movie>
  movie!:Observable<ResultsEntity[] | null | undefined>


  ngOnInit(){
    
    this.title='Guardian Dog';
    this.urlPoster='https://media.kitsu.io/manga/poster_images/1/original.jpg';

    this.movie= this.movieservice.getMovies().pipe(
      map(resuls=>{ 
        resuls.results?.forEach(element=>{element.backdrop_path='https://image.tmdb.org/t/p/original'+element.backdrop_path+'?api_key=18de74c72acecf2e5580d1bdc09c014d'})
        return resuls.results}),
      )
    

    this.movie.forEach(element=>{console.log('ok')})

  }


}
