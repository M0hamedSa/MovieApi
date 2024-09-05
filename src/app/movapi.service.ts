import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovapiService {

  constructor(private httpmovies:HttpClient) { }

  getmovies():Observable<any>{
    return this.httpmovies.get("https://api.themoviedb.org/3/movie/now_playing?api_key=793e1c43f18fe7c0ba035c34855a705a&include_image_language=en-US&page=1&append_to_response=images&include_image_language=en,null")
  }
  getlatestmovies():Observable<any>{
    return this.httpmovies.get("https://api.themoviedb.org/3/movie/Popular?api_key=793e1c43f18fe7c0ba035c34855a705a&include_image_language=en-US&page=1&append_to_response=images&include_image_language=en,null")
  }
  gettopmovies():Observable<any>{
    return this.httpmovies.get("https://api.themoviedb.org/3/movie/top_rated?api_key=793e1c43f18fe7c0ba035c34855a705a&include_image_language=en-US&page=1&append_to_response=images&include_image_language=en,null")
  }
  getupmovies():Observable<any>{
    return this.httpmovies.get("https://api.themoviedb.org/3/movie/upcoming?api_key=793e1c43f18fe7c0ba035c34855a705a&include_image_language=en-US&page=1&append_to_response=images&include_image_language=en,null")
  }

}
