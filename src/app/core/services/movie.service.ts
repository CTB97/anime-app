import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Movie, ResultsEntity } from "../models/movie.model";

@Injectable({providedIn:'root'})

export class MovieService{

   constructor(private http:HttpClient){}

   getMovies():Observable<Movie>{

    return this.http.get<Movie>('https://api.themoviedb.org/3/movie/popular?api_key=18de74c72acecf2e5580d1bdc09c014d&language=en-US')

   }
}