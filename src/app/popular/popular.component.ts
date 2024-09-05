import { Component, OnInit } from '@angular/core';
import { MovapiService } from '../movapi.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  num:string = ""
  term:string=""
  pmovies:any;
  constructor(public _pmovies:MovapiService) {  _pmovies.getmovies().subscribe(data => this.pmovies = data.results)}

  ngOnInit(): void {
  }

}
