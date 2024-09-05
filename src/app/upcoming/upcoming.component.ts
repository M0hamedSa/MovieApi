import { Component, OnInit } from '@angular/core';
import { MovapiService } from '../movapi.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  num:string = ""
  term:string=""
  umovies:any;
    constructor(public _umovies:MovapiService) {  _umovies.getupmovies().subscribe(data => this.umovies = data.results)}

  ngOnInit(): void {
  }

}
