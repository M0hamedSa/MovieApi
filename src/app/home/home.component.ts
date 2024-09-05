import { Component, OnInit } from '@angular/core';
import { MovapiService } from '../movapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  num:string = ""
  term: string = ""
  movies:any;
  constructor(public _movies:MovapiService) {  _movies.getmovies().subscribe(data => this.movies = data.results)}

  ngOnInit():void {
  }

}
