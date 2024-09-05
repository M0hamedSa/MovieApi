import { Component, OnInit } from '@angular/core';
import { MovapiService } from '../movapi.service';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.css']
})
export class TopratedComponent implements OnInit {
  num:string = ""
  term:string=""

    tmovies:any;
    constructor(public _tmovies:MovapiService) {  _tmovies.gettopmovies().subscribe(data => this.tmovies = data.results)}
  ngOnInit(): void {
  }

}
